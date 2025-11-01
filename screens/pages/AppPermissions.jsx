import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppPermissions = () => {
  const navigation = useNavigation();

  const permissions = [
    { id: 1, name: 'Câmera', icon: 'camera', status: 'Permitido' },
    { id: 2, name: 'Contatos', icon: 'people', status: 'Permitido' },
    { id: 3, name: 'Serviços de Localização', icon: 'location', status: 'Permitido' },
    { id: 4, name: 'Microfone', icon: 'mic', status: 'Permitido' },
    { id: 5, name: 'Notificações', icon: 'notifications', status: 'Permitido' },
    { id: 6, name: 'Fotos e Vídeos', icon: 'images', status: 'Permitido' },
  ];

  const handlePermissionPress = (permission) => {
    navigation.navigate('PermissionDetail', { permission });
  };

  const handleGoToDeviceSettings = () => {
    Linking.openSettings();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Permissões do Dispositivo</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lista de permissões */}
        {permissions.map((permission) => (
          <TouchableOpacity
            key={permission.id}
            style={styles.permissionItem}
            onPress={() => handlePermissionPress(permission)}
          >
            <Icon name={permission.icon} size={20} color="#4267F6" />
            <View style={styles.permissionInfo}>
              <Text style={styles.permissionName}>{permission.name}</Text>
            </View>
            <View style={styles.permissionRight}>
              <Text style={styles.permissionStatus}>{permission.status}</Text>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </View>
          </TouchableOpacity>
        ))}

        {/* Explicações e link */}
        <View style={styles.explanations}>
          <Text style={styles.explanationText}>
            Gerencie as permissões do aplicativo no seu dispositivo.
          </Text>
          
          <TouchableOpacity onPress={handleGoToDeviceSettings}>
            <Text style={styles.settingsLink}>
              Ir para as configurações de dispositivo
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  permissionInfo: {
    flex: 1,
    marginLeft: 15,
  },
  permissionName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  permissionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  permissionStatus: {
    fontSize: 14,
    color: '#4267F6',
    fontWeight: '600',
    marginRight: 10,
  },
  explanations: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  explanationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  settingsLink: {
    fontSize: 14,
    color: '#4267F6',
    textDecorationLine: 'underline',
  },
});

export default AppPermissions;
