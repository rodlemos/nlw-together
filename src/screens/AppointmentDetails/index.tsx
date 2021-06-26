import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import { Alert, ImageBackground, Text, View, Share } from 'react-native';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import BannerImg from '../../assets/banner.png';
import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import Header from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Loading } from '../../components/Loading';
import { Member, MemberProps } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { Styles } from './styles';

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export default function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

            setWidget(response.data)
        } catch (error) {
            Alert.alert("Verifique as configurações do servidor")
        } finally {
            setLoading(false)
        }
    }

    function handleShareInvite() {
        console.log(widget.instant_invite)
        const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildInfo();
    }, []);

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvite}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg} style={Styles.banner}>
                <View style={Styles.bannerContent}>
                    <Text style={Styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={Styles.subtitle}>{guildSelected.description}</Text>
                </View>
            </ImageBackground>

            {
                loading ? <Loading />
                    : <>
                        <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={Styles.members}
                        />

                        {
                            guildSelected.guild.owner &&
                            <View style={Styles.footer}>
                                <ButtonIcon
                                    title="Entrar na partida"
                                    onPress={handleOpenGuild}
                                />
                            </View>
                        }
                    </>
            }
        </Background>
    )
}
