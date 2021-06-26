import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    guildText: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.headings,
        fontSize: 18,
    },
    type: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    }
})