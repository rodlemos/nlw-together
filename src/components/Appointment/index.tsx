import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import CalendarSvg from '../../assets/calendar.svg';
import PlayerSvg from '../../assets/player.svg';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { GuildProps } from '../Guild';
import { GuildIcon } from '../GuildIcon';
import { Styles } from './styles';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string
}

type Props = RectButtonProperties & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors

    return (
        <RectButton {...rest}>
            <View style={Styles.container}>
                <LinearGradient
                    style={Styles.guildBorder}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>

                <View style={Styles.content}>
                    <View style={Styles.header}>
                        <Text style={Styles.title}>{data.guild.name}</Text>
                        <Text style={Styles.category}>{category.title}</Text>
                    </View>

                    <View style={Styles.footer}>
                        <View style={Styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={Styles.date}>{data.date}</Text>
                        </View>

                        <View style={Styles.playerInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text
                                style={[Styles.player, { color: owner ? primary : on }]}
                            >
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}
