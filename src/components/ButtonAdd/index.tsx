import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export default function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            style={Styles.container}
            {...rest}
        >
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.headings}
                size={24}
            />
        </RectButton>
    )
}
