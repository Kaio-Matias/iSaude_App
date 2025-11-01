import React from 'react';
import { View } from 'react-native';
import { style } from '../styles/styles';
import IconMap from '../../assets/localization/IconMap.svg';
import * as Location from 'expo-location';
import { InicialText } from '../components/InicialText';
import { handlePermission } from '../components/Permissions';
import { PermissionButtons } from '../components/PermissionButton';

export default function Localization({ navigation }) {
  const handleAllowPress = () => {
    handlePermission(Location.requestForegroundPermissionsAsync, {
      successTitle: 'Permissão concedida!',
      successMessage: 'Sua localização foi ativada.',
      errorTitle: 'Permissão negada',
      errorMessage: 'Não podemos usar sua localização sem permissão.',
      navigation,
      navigateOnGranted: 'Contacts',
    });
  };

  const handleDenyPress = () => {
    handlePermission(() => Promise.resolve({ status: 'denied' }), {
      successTitle: '',
      successMessage: '',
      errorTitle: 'Acesso negado',
      errorMessage:
        'Você pode ativar a localização nas configurações do seu celular a qualquer momento.',
      navigation,
      navigateOnDenied: 'Contacts',
    });
  };

  return (
    <View style={[style.main, style.CentralizarItems]}>
      <IconMap width={500} height={310} style={{ marginTop: 0 }} />

      <InicialText
        Title="A saúde mais perto de você"
        subTitle="Precisamos da sua permissão para acessar sua localização em tempo real enquanto você usa o app."
        text="Usaremos essa informação para conectar você a pessoas e locais próximos, além de oferecer conteúdo personalizado enquanto você navega no app."
        style={style}
      />

      <PermissionButtons
        onAllow={handleAllowPress}
        onDeny={handleDenyPress}
      />
    </View>
  );
}
