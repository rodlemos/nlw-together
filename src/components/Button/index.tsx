import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Styles } from './styles';

type Props = RectButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton style={[Styles.container]} {...rest}>
            <Text style={Styles.title}>{title}</Text>
        </RectButton>
    )
}

