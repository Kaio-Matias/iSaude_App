import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ConnectTypeScreen: { userType: 'pacient' | 'professional' | 'clinic' };
  ForgotPasswordScreen: undefined;
  NovaSenhaScreen: undefined;
  SenhaAlteradaScreen: undefined;
  Polity: undefined;
  Terms: undefined;
  MainApp: undefined; // A rota para o app principal (feed)
};

// EXPORTANDO OS TIPOS QUE ESTAVAM FALTANDO
export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;
export type ConnectTypeScreenProps = NativeStackScreenProps<RootStackParamList, 'ConnectTypeScreen'>;
export type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;
export type NovaSenhaScreenProps = NativeStackScreenProps<RootStackParamList, 'NovaSenhaScreen'>;
export type SenhaAlteradaScreenProps = NativeStackScreenProps<RootStackParamList, 'SenhaAlteradaScreen'>;
export type PolityProps = NativeStackScreenProps<RootStackParamList, 'Polity'>;
export type TermsProps = NativeStackScreenProps<RootStackParamList, 'Terms'>;
export type MainAppProps = NativeStackScreenProps<RootStackParamList, 'MainApp'>;