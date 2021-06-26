import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordIcon from '../../assets/discord.png';
import { Styles } from './styles';


type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({title, ...rest}:Props) {
    return (
        <RectButton style={Styles.container} {...rest}>
            <View style={Styles.iconWrapper}>
                <Image source={DiscordIcon} style={Styles.icon}/>
            </View>
                <Text style={Styles.title}>{title}</Text>
        </RectButton>
    )
}

