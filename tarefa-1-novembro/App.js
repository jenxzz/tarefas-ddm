import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [titulo, setTitulo] = useState('Meu app DDM');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite um título"
      />

      <Text style={styles.contadorTexto}>Contador: {contador}</Text>

      <View style={styles.botoes}>
        <View style={styles.botao}>
          <Button title="+1" onPress={() => setContador(contador + 1)} />
        </View>
        <View style={styles.botao}>
          <Button title="-1" onPress={() => setContador(contador - 1)} />
        </View>
      </View>

      <View style={styles.reset}>
        <Button title="Zerar" onPress={() => setContador(0)} color="#d9534f" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 18,
  },
  contadorTexto: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  botao: {
    width: '40%',
  },
  reset: {
    marginTop: 8,
    alignSelf: 'center',
    width: '50%',
  },
});
