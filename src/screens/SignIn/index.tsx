import React from 'react';
import { Image, Text, View, Alert, ActivityIndicator } from 'react-native';
import LoginImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
import { Styles } from './styles';

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <Background>
            <View style={Styles.container}>
                <Image source={LoginImg} style={Styles.img} resizeMode="stretch" />

                <View style={Styles.content}>
                    <Text style={Styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={Styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary}/>
                        : <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                        />
                    }
                </View>
            </View>
        </Background>
    )
}
