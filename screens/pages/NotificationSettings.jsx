import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Switch,
  Linking,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationSettings = () => {
  const navigation = useNavigation();
  const [allowNotifications, setAllowNotifications] = useState(true);

  const handleToggleNotifications = (value) => {
    setAllowNotifications(value);
  };

  const handleGoToDeviceSettings = () => {
    Linking.openSettings();
  };

  const renderInfoField = (icon, label, value, isEditable = true, isDisabled = false) => (
    <View style={styles.infoField}>
      <View style={styles.fieldLeft}>
        <Icon name={icon} size={20} color="#4267F6" />
        <View style={styles.fieldContent}>
          <Text style={styles.fieldLabel}>{label}</Text>
          <Text style={[styles.fieldValue, isDisabled && styles.disabledValue]}>
            {value}
          </Text>
        </View>
      </View>
      {isEditable && !isDisabled && (
        <TouchableOpacity onPress={() => handleToggleNotifications(!allowNotifications)}>
          <Switch
            value={allowNotifications}
            onValueChange={handleToggleNotifications}
            trackColor={{ false: '#E5E5EA', true: '#4267F6' }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#E5E5EA"
          />
        </TouchableOpacity>
      )}
      {isDisabled && (
        <Icon name="chevron-forward" size={20} color="#C7C7CC" />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Card principal */}
        <View style={styles.mainCard}>
          {renderInfoField('notifications', 'Permitir Notificações', allowNotifications ? 'Ativado' : 'Desativado')}
        </View>

        {/* Explicações e link */}
        <View style={styles.explanations}>
          <Text style={styles.explanationText}>
            Gerencie as notificações do aplicativo no seu dispositivo.
          </Text>
          
          <TouchableOpacity onPress={handleGoToDeviceSettings}>
            <Text style={styles.settingsLink}>
              Ir para as configurações do dispositivo
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
  mainCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fieldContent: {
    marginLeft: 15,
    flex: 1,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  disabledValue: {
    color: '#8E8E93',
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

export default NotificationSettings;
