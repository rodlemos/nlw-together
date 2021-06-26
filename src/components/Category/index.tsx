import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../global/styles/theme';
import { Styles } from './styles';


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category(
    { title, icon: Icon, checked = false, hasCheckBox=false, ...rest }: Props) {
    const { secondary20, secondary40, secondary50, secondary60  } = theme.colors

    return (
        <RectButton {...rest} >
            <LinearGradient 
                style={[Styles.container, { opacity: checked ? 1 : 0.4 }]}
                colors={[secondary50, secondary60]}
            >
                <LinearGradient
                    colors={[secondary20, secondary40]}
                    style={Styles.content}
                >
                    {
                        hasCheckBox && 
                        <View style={checked ? Styles.checked : Styles.check} />
                    }

                    <Icon width={52} height={52} />

                    <Text style={Styles.title}>{title}</Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}
