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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationSelector = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const addresses = [
    {
      id: 1,
      name: 'Q.A',
      address: 'Mangueirão, Belém - Pará, Brasil',
    },
    {
      id: 2,
      name: 'Q.A',
      address: 'Mangueirão, Belém - Pará, Brasil',
    },
    {
      id: 3,
      name: 'Q.A',
      address: 'Mangueirão, Belém - Pará, Brasil',
    },
    {
      id: 4,
      name: 'Q.A',
      address: 'Mangueirão, Belém - Pará, Brasil',
    },
  ];

  const handleAddressSelect = (address) => {
    // Aqui você pode implementar a lógica de seleção de endereço
    console.log('Endereço selecionado:', address);
    navigation.goBack();
  };

  const handleUseCurrentLocation = () => {
    // Aqui você pode implementar a lógica de localização atual
    console.log('Usando localização atual');
    navigation.goBack();
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
        <Text style={styles.headerTitle}>Endereço</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Barra de Busca */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Busque por região, cidade, endereço e mais..."
              placeholderTextColor="#8E8E93"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')}>
                <Icon name="close" size={20} color="#8E8E93" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Botão de Localização Atual */}
        <TouchableOpacity style={styles.currentLocationButton} onPress={handleUseCurrentLocation}>
          <Icon name="location" size={20} color="#FFFFFF" />
          <Text style={styles.currentLocationText}>Usar Minha localização atual</Text>
        </TouchableOpacity>

        {/* Lista de Endereços */}
        <View style={styles.addressesSection}>
          {addresses.map((address) => (
            <TouchableOpacity
              key={address.id}
              style={styles.addressCard}
              onPress={() => handleAddressSelect(address)}
            >
              <Icon name="location" size={20} color="#4267F6" />
              <View style={styles.addressInfo}>
                <Text style={styles.addressName}>{address.name}</Text>
                <Text style={styles.addressText}>{address.address}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção de Endereço Não Encontrado */}
        <View style={styles.notFoundSection}>
          <Text style={styles.notFoundTitle}>Não achou seu endereço?</Text>
          <TouchableOpacity style={styles.mapSearchButton} onPress={handleMapSearch}>
            <Text style={styles.mapSearchText}>Buscar no Mapa</Text>
          </TouchableOpacity>
        </View>
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
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    gap: 10,
  },
  currentLocationText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  addressesSection: {
    marginBottom: 20,
  },
  addressCard: {
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
  addressInfo: {
    flex: 1,
    marginLeft: 15,
  },
  addressName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
  },
  notFoundSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  notFoundTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
  mapSearchButton: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  mapSearchText: {
    color: '#4267F6',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LocationSelector;
