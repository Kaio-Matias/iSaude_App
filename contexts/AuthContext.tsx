import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// Você pode expandir isso para incluir o objeto de usuário completo
type AuthData = {
  token: string;
  user: {
    id: string;
    nome: string;
    email: string;
    tipo_usuario: 'pacient' | 'professional' | 'clinic';
    // Adicione outros dados do usuário que você recebe da API
  };
};

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(credentials: { email: string; password: string }): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carrega a sessão do AsyncStorage ao iniciar o app
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const storageData = await AsyncStorage.getItem('@iSaude:authData');
      if (storageData) {
        setAuthData(JSON.parse(storageData));
      }
    } catch (error) {
      console.error('Falha ao carregar dados do storage', error);
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (credentials: { email: string; password: string }) => {
    // --- INTEGRAÇÃO COM BFF (Etapa Futura) ---
    // Aqui você fará a chamada real ao seu BFF
    // Lembre-se de que a API de usuário espera o e-mail e a senha:
    // const response = await api.post('http://localhost:8080/api/user-api/user/login', credentials);
    // const { token, user } = response.data;
    // ----------------------------------------
    
    // --- SIMULAÇÃO DE SUCESSO ---
    // Vamos simular um login bem-sucedido por enquanto
    if (!credentials.email || !credentials.password) {
      Alert.alert("Erro", "Email e senha são obrigatórios.");
      return;
    }
    
    console.log("Simulando login para:", credentials.email);

    // Dados Falsos de Resposta (Este é o "carregamento" dos dados para o feed)
    const fakeApiResponse: AuthData = {
      token: 'fake-jwt-token-12345',
      user: {
        id: '1',
        nome: 'Usuário Simulado',
        email: credentials.email,
        tipo_usuario: 'professional',
      },
    };
    // --- FIM DA SIMULAÇÃO ---

    setAuthData(fakeApiResponse);
    await AsyncStorage.setItem('@iSaude:authData', JSON.stringify(fakeApiResponse));
  };

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@iSaude:authData');
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para usar o contexto
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };