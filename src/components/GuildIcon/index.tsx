import React from 'react';
import { Image, View } from 'react-native';
import { Styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={Styles.container}>
            {
                iconId ?
                    <Image
                        source={{ uri }}
                        style={Styles.image}
                        resizeMode="cover"
                    />
                : <DiscordSvg width={40} height={40}/>
            }
        </View>
    )
}
