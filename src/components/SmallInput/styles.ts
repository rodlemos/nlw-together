import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.headings,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center'
    }
})