import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState({
    name: 'Carlos Magno',
    username: '@carlos.magno',
    bio: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências a um atendimento humanizado, onde cada paciente é ouvido com atenção para construirmos juntos um plano de saúde preventivo e realista.',
  });

  const handleChangePhoto = () => {
    // Implementar seleção de foto
    console.log('Alterar foto de perfil');
  };

  const handleChangeProfileType = () => {
    navigation.navigate('ProfileType');
  };

  const handleSaveChanges = () => {
    // Implementar salvamento das alterações
    console.log('Salvando alterações:', profileData);
    navigation.goBack();
  };

  const updateField = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Seção da Foto */}
        <View style={styles.photoSection}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }} 
            style={styles.profilePhoto}
          />
          <TouchableOpacity style={styles.changePhotoButton} onPress={handleChangePhoto}>
            <Text style={styles.changePhotoText}>Alterar Foto de Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Campos de Edição */}
        <View style={styles.fieldsContainer}>
          {/* Nome */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Nome</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                value={profileData.name}
                onChangeText={(text) => updateField('name', text)}
                placeholder="Digite seu nome"
                placeholderTextColor="#8E8E93"
              />
            </View>
          </View>

          {/* Nome de Usuário */}
          <TouchableOpacity 
            style={styles.fieldContainer}
            onPress={() => navigation.navigate('EditUsername')}
          >
            <Text style={styles.fieldLabel}>Nome de Usuário</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputField}>{profileData.username}</Text>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </View>
          </TouchableOpacity>

          {/* Sobre Mim */}
          <TouchableOpacity 
            style={styles.fieldContainer}
            onPress={() => navigation.navigate('EditBio')}
          >
            <Text style={styles.fieldLabel}>Sobre mim</Text>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputField, styles.bioInput]} numberOfLines={3}>
                {profileData.bio}
              </Text>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Alterar Tipo de Perfil */}
        <TouchableOpacity style={styles.profileTypeButton} onPress={handleChangeProfileType}>
          <Text style={styles.profileTypeText}>Alterar tipo de Perfil</Text>
        </TouchableOpacity>

        {/* Botão Salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
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
  backButton: {
    padding: 5,
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
  photoSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  changePhotoButton: {
    paddingVertical: 10,
  },
  changePhotoText: {
    color: '#4267F6',
    fontSize: 16,
    fontWeight: '500',
  },
  fieldsContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  fieldContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  fieldLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  bioInput: {
    fontSize: 16,
    fontWeight: '400',
    minHeight: 80,
  },
  profileTypeButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  profileTypeText: {
    color: '#4267F6',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditProfile;
