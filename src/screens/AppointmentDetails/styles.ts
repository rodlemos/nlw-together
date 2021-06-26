import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {

    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.headings
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight: 16,
        color: theme.colors.headings
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
})