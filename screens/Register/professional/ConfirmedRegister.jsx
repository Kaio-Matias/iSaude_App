import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/ui/Button';
import { Container } from '../../../components/layout/Container';

export default function ConfirmedRegister() {
  const navigation = useNavigation();

  return (
    <Container>
      <View className="flex-1 items-center justify-center p-6">
        <Image
          source={require('../../../assets/Confirm-Register-Professional.png')}
          className="w-64 h-64 mb-8"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-primary-light text-center mb-4">
          Cadastro Concluído!
        </Text>
        <Text className="text-lg text-text-dark text-center mb-8">
          Verifique seu e-mail para ativar sua conta antes de fazer o login.
        </Text>
        <Button
          className="w-full"
          // *** MODIFICAÇÃO PRINCIPAL AQUI ***
          // Volta para a tela de login
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] })}
          // **********************************
        >
          Ir para Login
        </Button>
      </View>
    </Container>
  );
}