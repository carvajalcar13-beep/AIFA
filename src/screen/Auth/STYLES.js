import {  StyleSheet } from 'react-native';
import { COLORS } from '../../COLOR';

export const STYLES = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        padding: 20
    },
    CONTAINER_LOGO: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    LOGO: {
        width: 250,
        height: 200,
    },
    TITLE: {
        fontSize: 30,
        marginBottom: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    LABEL: {
        marginVertical: 20,
        textAlign: 'center',
        width: '100%',
    },
    INPUT: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 7,
        marginBottom: 4,
        width: "100%",
        borderRadius: 3,
    },
    BUTTON: {
        backgroundColor: COLORS.PRIMARY,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    BUTTON_TEXT: {
        color: '#fff',
        fontSize: 16,
    }
});
