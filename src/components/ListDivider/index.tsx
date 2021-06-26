import React from 'react';
import { View } from 'react-native';
import { Styles } from './styles';

type Props = {
    isCentered?: boolean;
}

export function ListDivider({isCentered}:Props) {
    return (
        <View style={[Styles.container, 
            isCentered ? {marginVertical: 12} : {marginTop: 2, marginBottom: 31}]}
        />
    )
}
