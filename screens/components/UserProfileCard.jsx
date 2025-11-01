import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useUserBlock } from './UserBlockContext';
import { ProfileOptionsModal } from './ProfileOptionsModal';
import { BlockConfirmationModal } from './BlockConfirmationModal';
import { useProfileNavigation, extractUserData } from '../utils/profileNavigation';

export const UserProfileCard = ({
  user,
  onProfilePress,
  showOptionsButton = true,
  showStats = true,
  showActionButton = true,
  actionButtonText = 'Seguir',
  onActionPress,
  style,
}) => {
  const navigation = useNavigation();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const { isUserBlocked, blockUser, unblockUser } = useUserBlock();

  const isBlocked = isUserBlocked(user.id);

  const { navigateToProfile } = useProfileNavigation();

  const handleProfilePress = () => {
    if (onProfilePress) {
      onProfilePress(user);
    } else {
      const userData = extractUserData({ user });
      navigateToProfile(userData);
    }
  };

  const handleOptionsPress = () => {
    setShowOptionsModal(true);
  };

  const handleAboutAccount = () => {
    Alert.alert('Sobre a Conta', `Informações sobre @${user.username}`);
  };

  const handleReport = () => {
    Alert.alert('Denunciar', `Denunciar @${user.username}`);
  };

  const handleBlockUser = () => {
    setShowBlockModal(true);
  };

  const handleConfirmBlock = () => {
    blockUser(user.id);
    Alert.alert('Usuário Bloqueado', `@${user.username} foi bloqueado com sucesso.`);
  };

  const handleUnblock = () => {
    unblockUser(user.id);
    Alert.alert('Usuário Desbloqueado', `@${user.username} foi desbloqueado com sucesso.`);
  };

  // Se o usuário estiver bloqueado, mostrar estado de bloqueado
  if (isBlocked) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.profileInfo}>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>{user.name}</Text>
              {user.isVerified && (
                <Ionicons name="checkmark-circle" size={16} color="#34C759" style={styles.verifiedIcon} />
              )}
            </View>
            <Text style={styles.username}>@{user.username}</Text>
            {user.specialty && (
              <View style={styles.specialtyContainer}>
                <Ionicons name="medical" size={14} color="#14B8A6" />
                <Text style={styles.specialtyText}>{user.specialty}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.blockedState}>
          <Ionicons name="person-remove" size={48} color="#8E8E93" />
          <Text style={styles.blockedTitle}>Usuário Bloqueado</Text>
          <Text style={styles.blockedDescription}>
            A @{user.username} não pode mais visualizar suas publicações e flashs, nem enviar mensagens para você.
          </Text>
        </View>

        <TouchableOpacity style={styles.unblockButton} onPress={handleUnblock}>
          <Text style={styles.unblockButtonText}>Desbloquear</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileInfo} onPress={handleProfilePress}>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>{user.name}</Text>
              {user.isVerified && (
                <Ionicons name="checkmark-circle" size={16} color="#34C759" style={styles.verifiedIcon} />
              )}
            </View>
            <Text style={styles.username}>@{user.username}</Text>
            {user.specialty && (
              <View style={styles.specialtyContainer}>
                <Ionicons name="medical" size={14} color="#14B8A6" />
                <Text style={styles.specialtyText}>{user.specialty}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {showOptionsButton && (
          <TouchableOpacity style={styles.optionsButton} onPress={handleOptionsPress}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#8E8E93" />
          </TouchableOpacity>
        )}
      </View>

      {showStats && user.stats && (
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.stats.publications || 0}</Text>
            <Text style={styles.statLabel}>Publicações</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.stats.followers || 0}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.stats.following || 0}</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>
      )}

      {user.bio && (
        <Text style={styles.bio} numberOfLines={3}>
          {user.bio}
          {user.bio.length > 100 && (
            <Text style={styles.seeMore}> Ver mais</Text>
          )}
        </Text>
      )}

      {user.website && (
        <Text style={styles.website}>{user.website}</Text>
      )}

      {showActionButton && (
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={onActionPress || (() => Alert.alert('Ação', actionButtonText))}
        >
          <Text style={styles.actionButtonText}>{actionButtonText}</Text>
        </TouchableOpacity>
      )}

      {/* Modais */}
      <ProfileOptionsModal
        visible={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        onAboutAccount={handleAboutAccount}
        onReport={handleReport}
        onBlockUser={handleBlockUser}
        username={user.username}
      />

      <BlockConfirmationModal
        visible={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirmBlock={handleConfirmBlock}
        username={user.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  username: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  specialtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialtyText: {
    fontSize: 12,
    color: '#14B8A6',
    marginLeft: 4,
    fontWeight: '500',
  },
  optionsButton: {
    padding: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    color: '#1C1C1E',
    lineHeight: 20,
    marginTop: 12,
  },
  seeMore: {
    color: '#007AFF',
    fontWeight: '500',
  },
  website: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 8,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  blockedState: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  blockedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginTop: 12,
    marginBottom: 8,
  },
  blockedDescription: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 16,
  },
  unblockButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  unblockButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
