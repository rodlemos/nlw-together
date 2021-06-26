import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    title: {
        flex: 1,
        color: theme.colors.headings,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        textAlign: 'center'
    },
    icon: {
        width: 24,
        height: 18,
    }
})