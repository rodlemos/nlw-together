import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    guildBorder: {
        width: 64,
        height: 68,
        marginRight: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        height: '100%', //cuidar essa propriedade!
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.headings,
        fontSize: 18
    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.headings,
        fontSize: 13,
        marginLeft: 7
    },
    playerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24
    },
    player: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        marginLeft: 7
    }
})