import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.headings,
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.headings,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    }
})