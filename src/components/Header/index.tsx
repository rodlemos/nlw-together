import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from './styles';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?:  ReactNode;
}

export default function Header({title, action}:Props) {
    const {secondary100, secondary40, headings} = theme.colors;
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={Styles.container}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={headings}
                />
            </BorderlessButton>

                <Text style={Styles.title}>{title}</Text>

                {
                    action 
                    ? <View>{action}</View>
                    : <View style={{width: 24}}></View>
                }
        </LinearGradient>
    )
}