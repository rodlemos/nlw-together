import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { Styles } from './style';

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}:Props) {
    const {secondary50, secondary70} = theme.colors;

    return (
            <LinearGradient
                style={Styles.container}
                colors={[secondary50, secondary70]}
            >
                <Image 
                    source={{uri: urlImage}}
                    style={Styles.avatar}
                />
            </LinearGradient>
    )
}
