import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Bolas decorativas no fundo */}
      <View style={[styles.redCircle, styles.redCircle1]} />
      <View style={[styles.redCircle, styles.redCircle2]} />
      <View style={[styles.redCircle, styles.redCircle3]} />

      {/* Contêiner do formulário de login com fundo transparente */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
        <TextInput 
          placeholder="E-mail:" 
          style={styles.input} 
          keyboardType="email-address" 
          placeholderTextColor="black" 
        />
        <TextInput 
          placeholder="Senha:" 
          style={styles.input} 
          secureTextEntry 
          placeholderTextColor="black" 
        />

        <Text style={styles.forgotPassword}>
          Esqueceu a senha
        </Text>

        <View style={styles.buttonContainer}>
          <Button title="ENTRAR" color="black" onPress={() => alert('Login efetuado')} />
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fundo branco para a tela principal
  },
  formContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo transparente branco
    borderRadius: 15,
    elevation: 5,
    width: '90%',
    maxWidth: 350, // Limite de largura para o formulário
    borderWidth: 1,
    borderColor: '#D32F2F',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#D32F2F', // Borda vermelha nos campos de entrada
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
    textAlign: 'center', // Centralização dos textos nos inputs
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  // Estilos para as bolas vermelhas no fundo
  redCircle: {
    position: 'absolute',
    backgroundColor: '#D32F2F',
    opacity: 0.8,
  },
  redCircle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: 80,
    left: -30,
  },
  redCircle2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    top: 20,
    right: -40,
  },
  redCircle3: {
    width: 120,
    height: 120,
    borderRadius: 60,
    bottom: 100,
    left: 40,
  },
});
