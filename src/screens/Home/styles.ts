import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight()  + 26,
        marginBottom: 42
    },
    content: {
        marginTop: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
        position: 'relative'
    },
    exitModal: {
        width: '100%',
        height: 170,
        position: 'absolute',
        bottom: 0
    },
    exitButtons: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 24
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.headings,
        textAlign: 'center',
        marginTop: 24
    }
})