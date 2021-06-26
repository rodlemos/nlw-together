import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { Style } from './styles';

type Props = {
    openModal: ()=> void;
}

export function Profile({openModal}:Props) {
    const { user } = useAuth();

    return (
        <View style={Style.container}>
            <RectButton onPress={openModal}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={Style.user}>
                    <Text style={Style.greeting}>Olá, </Text>
                    <Text style={Style.username}>{user.firstName}</Text>
                </View>

                <Text style={Style.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    )
}
