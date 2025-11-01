import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddAddress = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const suggestedAddresses = [
    { id: 1, name: 'Q.A', address: 'Mongueiriko, Delere - Pará, Brasil' },
    { id: 2, name: 'Q.A', address: 'Mongueiriko, Delere - Pará, Brasil' },
    { id: 3, name: 'Q.A', address: 'Mongueiriko, Delere - Pará, Brasil' },
    { id: 4, name: 'Q.A', address: 'Mongueiriko, Delere - Pará, Brasil' },
  ];

  const handleUseCurrentLocation = () => {
    // Implementar lógica de localização atual
    console.log('Usando localização atual');
  };

  const handleSearchOnMap = () => {
    navigation.navigate('MapSearch');
  };

  const handleAddressSelect = (address) => {
    navigation.navigate('AddressForm', { address });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Endereço</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Barra de pesquisa */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Busque por região, cidade, endereço e mais..."
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

        {/* Botão localização atual */}
        <TouchableOpacity style={styles.currentLocationButton} onPress={handleUseCurrentLocation}>
          <Icon name="location" size={20} color="#FFFFFF" />
          <Text style={styles.currentLocationText}>Usar Minha localização atual</Text>
        </TouchableOpacity>

        {/* Endereços sugeridos */}
        <View style={styles.suggestedSection}>
          {suggestedAddresses.map((address) => (
            <TouchableOpacity
              key={address.id}
              style={styles.addressItem}
              onPress={() => handleAddressSelect(address)}
            >
              <Icon name="location" size={20} color="#4267F6" />
              <View style={styles.addressInfo}>
                <Text style={styles.addressName}>{address.name}</Text>
                <Text style={styles.addressAddress}>{address.address}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Buscar no mapa */}
        <View style={styles.mapSection}>
          <Text style={styles.mapSectionTitle}>Não achou seu endereço?</Text>
          <TouchableOpacity style={styles.mapButton} onPress={handleSearchOnMap}>
            <Text style={styles.mapButtonText}>Buscar no Mapa</Text>
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  currentLocationText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 15,
  },
  suggestedSection: {
    marginBottom: 20,
  },
  addressItem: {
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
  addressInfo: {
    flex: 1,
    marginLeft: 15,
  },
  addressName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  addressAddress: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  mapSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  mapSectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  mapButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default AddAddress;
