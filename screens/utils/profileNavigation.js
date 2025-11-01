import { useNavigation } from '@react-navigation/native';
import { useBlockedUsers } from '../contexts/BlockedUsersContext';

// Hook personalizado para navegação de perfil
export const useProfileNavigation = () => {
  const navigation = useNavigation();
  const { isUserBlocked } = useBlockedUsers();

  const navigateToProfile = (user) => {
    if (!user) return;

    // Se o usuário estiver bloqueado, navega para a tela de perfil bloqueado
    if (isUserBlocked(user.username || user.name)) {
      navigation.navigate('BlockedProfile', { username: user.username || user.name });
    } else {
      // Navega para o perfil normal do usuário
      navigation.navigate('UserProfile', { user });
    }
  };

  return { navigateToProfile };
};

// Função utilitária para extrair dados do usuário de diferentes formatos
export const extractUserData = (item) => {
  // Se já é um objeto de usuário
  if (item.user) {
    return item.user;
  }
  
  // Se é um item de conversa
  if (item.name && item.profileImage) {
    return {
      name: item.name,
      avatar: item.profileImage,
      username: item.username || item.name,
      // Adiciona outros campos que podem estar disponíveis
      ...item
    };
  }
  
  // Se é um item de perfil
  if (item.name && item.image) {
    return {
      name: item.name,
      avatar: item.image,
      username: item.username || item.name,
      specialty: item.specialism,
      // Adiciona outros campos que podem estar disponíveis
      ...item
    };
  }
  
  // Se é um item de notificação
  if (item.avatar) {
    return {
      name: item.name || 'Usuário',
      avatar: item.avatar,
      username: item.username || item.name || 'usuario',
      // Adiciona outros campos que podem estar disponíveis
      ...item
    };
  }
  
  // Retorna o item como está se não conseguir extrair dados específicos
  return item;
};
