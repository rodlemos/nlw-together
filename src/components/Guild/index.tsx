import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { Styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild({data, ...rest}:Props) {
    return (
        <TouchableOpacity
            style={Styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon guildId={data.id} iconId={data.icon}/>
            <View style={Styles.content}>
                <View style={Styles.guildText}>
                    <Text style={Styles.title}>{data.name}</Text>
                    <Text style={Styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather 
                name="chevron-right"
                color={theme.colors.headings}
                size={15}
            />
        </TouchableOpacity>
    )
}
