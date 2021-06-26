import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    content: {
        marginTop: -60,
        paddingHorizontal: 45

    },
    img: {
        width: '100%',
        height: 360
    },
    title: {
        color: theme.colors.headings,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
        marginBottom: 16,
    },
    subtitle:{
        color: theme.colors.headings,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        marginBottom: 48
    },
    icon: {
        width: 24,
        height: 18
    }
})