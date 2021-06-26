import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const Styles = StyleSheet.create({
    container: {
        width: '48%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        
    },
    title: {
        flex: 1,
        fontFamily: theme.fonts.text500,
        color: theme.colors.headings,
        fontSize: 15,
        textAlign: 'center',
    },
    exitBtn: {
        backgroundColor: 'transparent',
        borderColor: theme.colors.secondary30,
        borderWidth: 1
    }
});