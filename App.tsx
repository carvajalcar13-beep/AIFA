import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [tempStore, setTempStore] = useState([]);
  
  //const handlelogin = () => {
    //setTempStore({ email, password });
 // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        //
        style ={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
      style={styles.input}
      placeholder='Password'
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      />

      <StatusBar style="auto" />
      <Button title='Iniciar sesión' onPress={handlelogin}/>
      <Text>{JSON.stringify( tempStore, null, 2)}</Text>

    </View>
  );
}
      
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:34,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 5,
  }
});
