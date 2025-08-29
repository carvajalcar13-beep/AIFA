import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import logo from '../../../src/img/AIFA_AVION.png';
import { STYLES } from './STYLES';
import { COLORS } from '../../COLOR';


export default function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [tempStore, setTempStore] = useState({});

    const handlelogin = () => {
        setTempStore({ email, password });
    }

    return (
        <View style={STYLES.CONTAINER}>
            <StatusBar style="auto" />
            <View style={{ ...STYLES.CONTAINER, justifyContent: 'center' }}>
                <View style={STYLES.CONTAINER_LOGO}>
                    <Image
                        style={STYLES.LOGO}
                        source={logo}
                    />
                    <Text style={STYLES.TITLE}>Crea tu cuenta</Text>
                </View>
                <TextInput
                    label="Correo electrónico"
                    mode='outlined'
                    style={{ marginBottom: 10 }}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    label="Contraseña"
                    mode='outlined'
                    secureTextEntry={secureTextEntry}
                    right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntry(!secureTextEntry)} />}
                    style={{ marginBottom: 10 }}
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    label="Confirmar contraseña"
                    mode='outlined'
                    secureTextEntry={secureTextEntry}
                    right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntry(!secureTextEntry)} />}
                    style={{ marginBottom: 10 }}
                    value={password}
                    onChangeText={setPassword}
                />

                <Button
                    icon="login" mode="contained" onPress={() => handlelogin()}
                    style={{ borderRadius: 5 }}
                >
                    Iniciar sesión
                </Button>

                <Text style={STYLES?.LABEL}>Iniciar sesión con...</Text>

                <Button
                    icon="google-plus" mode='contained-tonal' onPress={() => handlelogin()} textColor='#000000'
                    style={{ borderRadius: 5 }}
                >
                    Google
                </Button>
            </View>

            <View style={{ ...STYLES.CONTAINER_LOGO, flexDirection: 'row' }}>
                <Text style={{}}>¿Aún no tienes cuenta? </Text>
                <Text style={{ fontWeight: 'bold', color: COLORS.PRIMARY }}>Crear una cuenta</Text>
            </View>

        </View>
    );
}