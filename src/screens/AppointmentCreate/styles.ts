import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.headings
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select : {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary40,
        borderRightWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.highlight
    },
    textLimit: {
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.highlight
    },
    footer: {
        paddingHorizontal: 24,
        paddingTop: 20,
        marginBottom: 56
    }
    
})