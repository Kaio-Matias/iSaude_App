import React from 'react';
import { View } from 'react-native';
import { style } from '../styles/styles';
import ContactIcon from '../../assets/contacts/WebContact.svg';
import * as Contacts from 'expo-contacts';
import { InicialText } from '../components/InicialText';
import { handlePermission } from '../components/Permissions';
import { PermissionButtons } from '../components/PermissionButton';
import Feed from './Feed';

export default function Contact({ navigation }) {
  const handleAllowPress = () => {
    handlePermission(Contacts.requestPermissionsAsync, {
      successTitle: 'Permissão concedida!',
      successMessage: 'Obrigado por permitir o acesso aos seus contatos.',
      errorTitle: 'Permissão negada',
      errorMessage: 'Não podemos conectar você sem sua permissão para acessar os contatos.',
      navigation,
      navigateOnDenied: 'MainTabs',
      // se quiser navegar após permitir, use navigateOnGranted: 'OutraTela',
    });
  };

  const handleDenyPress = () => {
    handlePermission(() => Promise.resolve({ status: 'denied' }), {
      successTitle: '',
      successMessage: '',
      errorTitle: 'Acesso negado',
      errorMessage: 'Você pode ativar a permissão nas configurações do seu celular a qualquer momento.',
      navigation,
      navigateOnDenied: 'MainTabs',
    });
  };

  return (
    <View style={[style.main, style.CentralizarItems]}>
      <ContactIcon width={400} height={310} style={{ marginTop: 20 }} />

      <InicialText
        Title="Conecte-se com seus amigos!"
        subTitle="Precisamos da sua permissão para acessar seus contatos."
        text="Assim fortalecemos sua rede de apoio, conectando você a amigos que já usam o iSaúde e convidando quem precisa de ajuda."
        style={style}
      />

      <PermissionButtons
        onAllow={handleAllowPress}
        onDeny={handleDenyPress}
      />
    </View>
  );
}
