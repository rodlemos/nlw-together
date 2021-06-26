import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import { Styles } from './styles';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        try {
            const response = await api.get('/users/@me/guilds');

            setGuilds(response.data)
            setLoading(false)
        } catch(error) {}
    }

    useEffect(()=> {
        fetchGuilds();
    },[])

    return (
        <View style={Styles.container}>
            {
                loading ? <Loading />
                    : <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildSelected(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        contentContainerStyle={{ paddingBottom: 24, paddingTop: 30 }}
                        showsVerticalScrollIndicator={false}
                        style={Styles.guilds}
                    />
            }
        </View>
    )
}
