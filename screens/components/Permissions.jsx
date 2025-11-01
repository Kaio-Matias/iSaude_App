import { Alert } from 'react-native';

/**
 * Função genérica para solicitar qualquer tipo de permissão
 * 
 * @param {Function} requestPermission - Função que solicita a permissão (ex: Location.requestForegroundPermissionsAsync)
 * @param {Object} options - Configurações de mensagens e navegação
 * @param {string} options.successTitle - Título do alerta quando permitido
 * @param {string} options.successMessage - Mensagem do alerta quando permitido
 * @param {string} options.errorTitle - Título do alerta quando negado
 * @param {string} options.errorMessage - Mensagem do alerta quando negado
 * @param {Object} [options.navigation] - Objeto navigation do React Navigation (opcional)
 * @param {string} [options.navigateOnGranted] - Rota para navegar quando permitido
 * @param {string} [options.navigateOnDenied] - Rota para navegar quando negado
 */
export const handlePermission = async (requestPermission, options) => {
  try {
    const { status } = await requestPermission();

    if (status === 'granted') {
      Alert.alert(options.successTitle, options.successMessage);
      if (options.navigation && options.navigateOnGranted) {
        options.navigation.navigate(options.navigateOnGranted);
      }
    } else {
      Alert.alert(options.errorTitle, options.errorMessage);
      if (options.navigation && options.navigateOnDenied) {
        options.navigation.navigate(options.navigateOnDenied);
      }
    }
  } catch (error) {
    console.error('Erro ao solicitar permissão:', error);
    Alert.alert('Erro', 'Ocorreu um erro ao solicitar a permissão.');
  }
};
