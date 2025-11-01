import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileOptions = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('Perfil');

  const handleLogout = () => {
    // Aqui você pode implementar a lógica de logout
    Alert.alert('Logout', 'Deseja realmente sair da sua conta?');
  };

  const renderSection = (title, items) => (
    <View style={styles.section}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={styles.optionLeft}>
            <Icon name={item.icon} size={20} color="#4267F6" />
            <Text style={styles.optionText}>{item.text}</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#C7C7CC" />
        </TouchableOpacity>
      ))}
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
        <Text style={styles.headerTitle}>Opções</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Perfil"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#8E8E93"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Icon name="close" size={20} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Meu Perfil */}
        {renderSection('Meu Perfil', [
          { icon: 'person-circle', text: 'Meu Perfil', screen: 'MyProfile' },
          { icon: 'create', text: 'Editar Perfil', screen: 'EditProfile' },
          { icon: 'at', text: 'Nome de Usuário', screen: 'EditUsername' },
          { icon: 'document-text', text: 'Sobre Mim', screen: 'EditBio' },
        ])}

        {/* Meus Dados */}
        {renderSection('Meus Dados', [
          { icon: 'person', text: 'Informações Pessoais', screen: 'PersonalInfo' },
          { icon: 'location', text: 'Meus Endereços', screen: 'MyAddresses' },
          { icon: 'card', text: 'Meus Cartões', screen: 'MyCards' },
          { icon: 'at', text: 'Privacidade da Conta', screen: 'AccountPrivacy' },
        ])}

        {/* Aplicativo */}
        {renderSection('Aplicativo', [
          { icon: 'notifications', text: 'Notificações', screen: 'Notifications' },
          { icon: 'list', text: 'Permissões do Aplicativo', screen: 'AppPermissions' },
        ])}

        {/* Atividade */}
        {renderSection('Atividade', [
          { icon: 'refresh', text: 'Histórico da Conta', screen: 'AccountHistory' },
          { icon: 'heart', text: 'Minhas Curtidas', screen: 'MyLikes' },
          { icon: 'bookmark', text: 'Salvos', screen: 'Saved' },
        ])}

        {/* Suporte e Segurança */}
        {renderSection('Suporte e Segurança', [
          { icon: 'accessibility', text: 'Acessibilidade', screen: 'Accessibility' },
          { icon: 'headset', text: 'Central de Ajuda e Feedback', screen: 'HelpCenter' },
          { icon: 'information-circle', text: 'Sobre o Aplicativo', screen: 'AboutApp' },
          { icon: 'shield-checkmark', text: 'Política de Privacidade', screen: 'PrivacyPolicy' },
          { icon: 'document-text', text: 'Termos de Uso', screen: 'TermsOfUse' },
        ])}

        {/* Outras Ações */}
        {renderSection('', [
          { icon: 'star', text: 'Avaliar', screen: 'RateApp' },
          { icon: 'share-social', text: 'Compartilhar Aplicativo', screen: 'ShareApp' },
        ])}

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Sair da minha Conta</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Profile Image */}
      <View style={styles.floatingProfile}>
        <Icon name="person" size={24} color="#4267F6" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    marginLeft: 20,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    marginLeft: 15,
    fontWeight: '500',
  },
  floatingProfile: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default ProfileOptions;
