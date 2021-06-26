import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    exitButton?: boolean;
}

export function ExitButtons({ title, exitButton, ...rest }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={exitButton ? [Styles.container, Styles.exitBtn] : Styles.container}
            {...rest}
        >
            <Text style={Styles.title}>{title}</Text>

        </TouchableOpacity>
    )
}
