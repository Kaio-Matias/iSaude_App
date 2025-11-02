import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
import { StatusBar } from 'react-native';

// Contexto de Autenticação
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Telas
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ConnectTypeScreen from './screens/ConnectTypeScreen';
import ForgotPasswordScreen from './screens/Password/ForgotPasswordScreen';
import NovaSenhaScreen from './screens/NovaSenhaScreen';
import SenhaAlteradaScreen from './screens/SenhaAlteradaScreen';
import Polity from './screens/Terms-Polity/Polity';
import Terms from './screens/Terms-Polity/Terms';

// O App Principal (Feed, etc.)
import BottomNav from './screens/BottomNav'; // O Navegador com as Tabs
import { StoryViewerProvider } from './screens/contexts/StoryViewerContext';
import { BlockedUsersProvider } from './screens/contexts/BlockedUsersContext';

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const AppStack = createNativeStackNavigator<RootStackParamList>();

// Pilha de telas de Autenticação (pré-login)
const AuthScreens = () => (
  <AuthStack.Navigator
    initialRouteName="HomeScreen" // A tela de "Entrar como"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
    <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    <AuthStack.Screen name="ConnectTypeScreen" component={ConnectTypeScreen} />
    <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="NovaSenhaScreen" component={NovaSenhaScreen} />
    <AuthStack.Screen name="SenhaAlteradaScreen" component={SenhaAlteradaScreen} />
    <AuthStack.Screen name="Polity" component={Polity} />
    <AuthStack.Screen name="Terms" component={Terms} />
  </AuthStack.Navigator>
);

// Pilha de telas do App Principal (Pós-login)
const AppScreens = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="MainApp" component={BottomNav} />
    {/* Adicione aqui outras telas que o BottomNav precise chamar (ex: Perfil de outro usuário, Configurações) */}
  </AppStack.Navigator>
);

// O Navegador Raiz que decide qual pilha mostrar
const RootNavigator = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    // A tela de splash é mostrada enquanto o AuthContext verifica o AsyncStorage
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {authData?.token ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

// Ponto de entrada principal
export default function App() {
  return (
    <AuthProvider>
      <BlockedUsersProvider>
        <StoryViewerProvider>
          <RootNavigator />
        </StoryViewerProvider>
      </BlockedUsersProvider>
    </AuthProvider>
  );
}