import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchAppointments = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('Clinicol');
  const [currentLocation, setCurrentLocation] = useState('Belém-Pará');

  const specialties = [
    { id: 1, name: 'Clínico Geral', icon: 'medical' },
    { id: 2, name: 'Clínico Geral Pediatra', icon: 'medical' },
    { id: 3, name: 'Clínico Geral', icon: 'medical' },
  ];

  const profiles = [
    {
      id: 1,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
      paymentOptions: 2,
    },
    {
      id: 2,
      name: 'Mais Saúde',
      specialty: 'Clínica Geral',
      avatar: null,
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
      paymentOptions: 2,
    },
    {
      id: 3,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
      paymentOptions: 2,
    },
  ];

  const handleSpecialtyPress = (specialty) => {
    navigation.navigate('SpecialtyDoctors', { specialty });
  };

  const handleProfilePress = (profile) => {
    navigation.navigate('DoctorProfile', { profile });
  };

  const handleLocationChange = () => {
    navigation.navigate('LocationSelector');
  };

  const handleMapSearch = () => {
    navigation.navigate('MapSearch');
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
        <Text style={styles.headerTitle}>Buscar Atendimentos</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Localização */}
        <TouchableOpacity style={styles.locationContainer} onPress={handleLocationChange}>
          <Icon name="location" size={16} color="#666" />
          <Text style={styles.locationLabel}>Buscando em</Text>
          <Text style={styles.locationText}>{currentLocation}</Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>

        {/* Barra de Busca */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Busque por especialidade, profissional..."
              placeholderTextColor="#8E8E93"
            />
            <TouchableOpacity style={styles.micButton}>
              <Icon name="mic" size={20} color="#4267F6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Especialidades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Especialidades</Text>
          {specialties.map((specialty) => (
            <TouchableOpacity
              key={specialty.id}
              style={styles.specialtyItem}
              onPress={() => handleSpecialtyPress(specialty)}
            >
              <Icon name={specialty.icon} size={20} color="#4267F6" />
              <Text style={styles.specialtyText}>{specialty.name}</Text>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Perfis */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfis</Text>
          {profiles.map((profile) => (
            <TouchableOpacity
              key={profile.id}
              style={styles.profileCard}
              onPress={() => handleProfilePress(profile)}
            >
              <View style={styles.profileLeft}>
                {profile.avatar ? (
                  <Image source={{ uri: profile.avatar }} style={styles.profileAvatar} />
                ) : (
                  <View style={styles.profileIcon}>
                    <Icon name="medical" size={24} color="#4267F6" />
                  </View>
                )}
                <View style={styles.profileInfo}>
                  <View style={styles.profileNameContainer}>
                    <Text style={styles.profileName}>{profile.name}</Text>
                    <Icon name="checkmark-circle" size={16} color="#4CAF50" />
                  </View>
                  <View style={styles.profileSpecialty}>
                    <Icon name="medical" size={14} color="#666" />
                    <Text style={styles.specialtyText}>{profile.specialty}</Text>
                  </View>
                  <View style={styles.serviceButtons}>
                    {profile.services.map((service, index) => (
                      <View
                        key={index}
                        style={[
                          styles.serviceButton,
                          service === 'Teleconsulta' ? styles.teleconsultaButton : styles.presencialButton
                        ]}
                      >
                        <Text style={styles.serviceButtonText}>{service}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.locationInfo}>
                    <Icon name="location" size={14} color="#666" />
                    <Text style={styles.locationText}>{profile.location}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.profileRight}>
                <Text style={styles.priceLabel}>A partir de</Text>
                <Text style={styles.priceValue}>{profile.price}</Text>
                {profile.paymentOptions > 1 && (
                  <View style={styles.paymentInfo}>
                    <Icon name="card" size={12} color="#666" />
                    <Text style={styles.paymentText}>{profile.paymentOptions}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Busca no Mapa */}
        <TouchableOpacity style={styles.mapButton} onPress={handleMapSearch}>
          <Text style={styles.mapButtonText}>e o mapa para busca de locais</Text>
        </TouchableOpacity>
      </ScrollView>
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 8,
  },
  locationLabel: {
    fontSize: 14,
    color: '#666',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  micButton: {
    padding: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  specialtyItem: {
    flexDirection: 'row',
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
  specialtyText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  profileCard: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  profileLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  profileSpecialty: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  serviceButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  serviceButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  teleconsultaButton: {
    backgroundColor: '#E3F2FD',
  },
  presencialButton: {
    backgroundColor: '#FCE4EC',
  },
  serviceButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4267F6',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  profileRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  paymentText: {
    fontSize: 12,
    color: '#666',
  },
  mapButton: {
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  mapButtonText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchAppointments;
