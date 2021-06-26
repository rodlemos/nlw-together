import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        position: "relative"
    },
    content: {
        width: 103,
        height: 119,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.headings,
        fontSize: 15
    },
    check: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.secondary80,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8
    }
})