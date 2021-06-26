import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';
import { Styles } from './styles';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps
}

export function Member({ data }: Props) {
    const isOnline = data.status === 'online';
    const {primary, on} = theme.colors
    return (
        <View style={Styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={Styles.title}>{data.username}</Text>

                <View style={Styles.status}>                    
                    <View 
                        style={[Styles.bulletStatus, 
                            {backgroundColor: isOnline ? on :  primary}]}
                    />
                    <Text style={Styles.nameStatus}>
                        {isOnline ? 'Disponível' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    )
}
