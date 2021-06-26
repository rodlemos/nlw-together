import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Styles } from './styles';

export function TextArea({...rest}:TextInputProps) {
    return (
        <TextInput
            style={Styles.container}
            {...rest}
        />
    )
}
