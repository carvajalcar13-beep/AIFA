import * as React from 'react';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Login from './src/screen/Auth/Login';
import { COLORS } from './src/COLOR';

export default function App() {

    const theme = {
        ...DefaultTheme,
        myOwnProperty: true,
        colors: {
            ...DefaultTheme.colors,
            myOwnColor: '#BADA55',
            primary: COLORS.PRIMARY,
        },
    };

    return (
        <PaperProvider theme={theme}>
            <Login />
        </PaperProvider>
    );
}
