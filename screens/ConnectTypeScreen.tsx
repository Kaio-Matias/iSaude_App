import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ConnectTypeScreenProps } from '../types/navigation';
import { Container } from '../components/layout/Container';
import { BackHeader } from '../components/ui/BackHeader';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Link } from '../components/ui/Link';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext'; // <-- IMPORTAR O CONTEXTO

export default function ConnectTypeScreen() {
  const navigation = useNavigation<ConnectTypeScreenProps['navigation']>();
  const route = useRoute<ConnectTypeScreenProps['route']>();
  const { userType } = route.params;

  const { signIn } = useAuth(); // <-- USAR O CONTEXTO
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getTitle = () => {
    switch (userType) {
      case 'pacient':
        return 'Paciente';
      case 'professional':
        return 'Profissional da Saúde';
      case 'clinic':
        return 'Clínica ou Hospital';
      default:
        return '';
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail e a senha.');
      return;
    }
    setLoading(true);
    try {
      // *** MODIFICAÇÃO PRINCIPAL AQUI ***
      // Chama a função signIn do contexto para "carregar os dados"
      await signIn({ email, password });
      // Não é mais necessário o navigation.reset().
      // O App.tsx vai detectar a mudança no authData e trocará as telas.
      // **********************************
    } catch (error) {
      console.error(error);
      // Aqui você trataria erros da API, ex: e-mail não verificado
      Alert.alert('Erro no Login', 'E-mail ou senha inválidos.');
      setLoading(false);
    }
    // O setLoading(false) não é necessário no sucesso, pois a tela irá desmontar
  };

  return (
    <Container>
      <BackHeader />
      <View className="items-center mt-5 mb-8">
        <Image
          source={require('../assets/logo-isaude.png')}
          className="w-20 h-20"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-primary-light mt-4">{getTitle()}</Text>
      </View>

      <View className="w-full px-6">
        <View className="mb-4">
          <Label>E-mail</Label>
          <Input
            placeholder="example@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <Label>Senha</Label>
          <Input
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View className="items-end mt-2">
            <Link onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              Esqueceu a senha?
            </Link>
          </View>
        </View>

        <Button onPress={handleLogin} disabled={loading}>
          {loading ? 'Conectando...' : 'Conectar'}
        </Button>

        <View className="flex-row justify-center mt-6">
          <Text className="text-text-dark">Não tem uma conta?</Text>
          <Link onPress={() => navigation.navigate('RegisterScreen')} className="ml-1">
            Cadastre-se
          </Link>
        </View>
      </View>
    </Container>
  );
}