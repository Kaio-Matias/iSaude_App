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

const ServiceHistory = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('recent');

  const serviceHistory = [
    {
      date: 'Quarta, 23 de Abril',
      services: [
        {
          id: 1,
          provider: {
            name: 'Dra. Maria Glenda',
            avatar: 'https://i.pravatar.cc/150?img=3',
            isVerified: true,
          },
          type: 'Consulta Geral',
          status: 'Concluído',
          statusColor: '#4CAF50',
        },
      ],
    },
    {
      date: 'Segunda, 21 de Abril',
      services: [
        {
          id: 2,
          provider: {
            name: 'Dra. Maria Glenda',
            avatar: 'https://i.pravatar.cc/150?img=4',
            isVerified: true,
          },
          type: 'Consulta Geral',
          status: 'Cancelado',
          statusColor: '#F44336',
        },
        {
          id: 3,
          provider: {
            name: 'Clínica Mais Saúde',
            icon: '🏥',
            isVerified: true,
          },
          type: 'Raio-X e Hemograma',
          status: 'Concluído',
          statusColor: '#4CAF50',
        },
      ],
    },
    {
      date: 'Sexta, 18 de Abril',
      services: [
        {
          id: 4,
          provider: {
            name: 'Dra. Maria Glenda',
            avatar: 'https://i.pravatar.cc/150?img=5',
            isVerified: true,
          },
          type: 'Consulta Geral',
          status: 'Reagendado',
          statusColor: '#FF9800',
        },
        {
          id: 5,
          provider: {
            name: 'Dra. Maria Glenda',
            avatar: 'https://i.pravatar.cc/150?img=6',
            isVerified: true,
          },
          type: 'Consulta Geral',
          status: 'Cancelado',
          statusColor: '#F44336',
        },
        {
          id: 6,
          provider: {
            name: 'Dra. Maria Glenda',
            avatar: 'https://i.pravatar.cc/150?img=7',
            isVerified: true,
          },
          type: 'Consulta Geral',
          status: 'Cancelado',
          statusColor: '#F44336',
        },
      ],
    },
  ];

  const handleServicePress = (service) => {
    navigation.navigate('CompletedAppointment', { service });
  };

  const renderService = (service) => (
    <TouchableOpacity
      key={service.id}
      style={styles.serviceCard}
      onPress={() => handleServicePress(service)}
    >
      <View style={styles.serviceLeft}>
        {service.provider.avatar ? (
          <Image source={{ uri: service.provider.avatar }} style={styles.providerAvatar} />
        ) : (
          <View style={styles.providerIcon}>
            <Text style={styles.providerIconText}>{service.provider.icon}</Text>
          </View>
        )}
        <View style={styles.serviceInfo}>
          <View style={styles.providerNameContainer}>
            <Text style={styles.providerName}>{service.provider.name}</Text>
            <Icon 
              name="checkmark-circle" 
              size={16} 
              color={service.provider.avatar ? "#4CAF50" : "#9C27B0"} 
            />
          </View>
          <Text style={styles.serviceType}>{service.type}</Text>
        </View>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: service.statusColor }]}>
        <Text style={styles.statusText}>{service.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDateSection = (dateSection) => (
    <View key={dateSection.date} style={styles.dateSection}>
      <Text style={styles.dateTitle}>{dateSection.date}</Text>
      {dateSection.services.map(renderService)}
    </View>
  );

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
        <Text style={styles.headerTitle}>Histórico de Atendimento</Text>
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
              placeholder="Busque por profissional, tipo de atendimento..."
              placeholderTextColor="#8E8E93"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')}>
                <Icon name="close" size={20} color="#8E8E93" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Filtros */}
        <View style={styles.filtersContainer}>
          <TouchableOpacity 
            style={[styles.filterButton, filterType === 'all' && styles.activeFilter]}
            onPress={() => setFilterType('all')}
          >
            <Text style={[styles.filterText, filterType === 'all' && styles.activeFilterText]}>
              Todos os Atendimentos
            </Text>
            <Icon name="chevron-down" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.filterButton, sortOrder === 'recent' && styles.activeFilter]}
            onPress={() => setSortOrder(sortOrder === 'recent' ? 'oldest' : 'recent')}
          >
            <Text style={[styles.filterText, sortOrder === 'recent' && styles.activeFilterText]}>
              De recentes a mais antigos
            </Text>
            <Icon name="chevron-down" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Histórico */}
        <View style={styles.historyContainer}>
          {serviceHistory.map(renderDateSection)}
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
  filtersContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },
  activeFilter: {
    backgroundColor: '#E3F2FD',
    borderColor: '#4267F6',
    borderWidth: 1,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#4267F6',
    fontWeight: '500',
  },
  historyContainer: {
    flex: 1,
  },
  dateSection: {
    marginBottom: 20,
  },
  dateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 1,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  providerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  providerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  providerIconText: {
    fontSize: 24,
  },
  serviceInfo: {
    flex: 1,
  },
  providerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  providerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  serviceType: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ServiceHistory;
