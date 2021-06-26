import React from 'react';
import { View, Text } from 'react-native';
import { Style } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

export function Profile() {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do GamePlay?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: ()=> signOut()
                }
            ]
        )
    }

    return (
        <View style={Style.container}>
            <RectButton onPress={handleSignOut}>
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
