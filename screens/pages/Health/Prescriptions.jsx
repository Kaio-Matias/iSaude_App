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

const Prescriptions = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('recent');

  const documents = [
    {
      id: 1,
      cid: 'CID-10 R53',
      type: 'Prescrição Médica',
      validity: 'Válido até 31 de Maio',
      status: 'Válido',
      statusColor: '#4CAF50',
      prescribedBy: 'Dra. Maria Glenda',
      isVerified: true,
      disclaimer: 'O presente atestado é válido para finalidades previstas no art. 143 F do Decreto 2172 de 06/03/1997 e Resolução CRM 1931/M e será consultado para justificar o afastamento do trabalho de 1 a 15 dias.',
    },
    {
      id: 2,
      cid: 'CID-10 R53',
      type: 'Atestado R53',
      validity: 'Válido até 20 de Abril',
      status: 'Expirado',
      statusColor: '#F44336',
      prescribedBy: 'Dra. Maria Glenda',
      isVerified: true,
      disclaimer: 'O presente atestado é válido para finalidades previstas no art. 143 F do Decreto 2172 de 06/03/1997 e Resolução CRM 1931/M e será consultado para justificar o afastamento do trabalho de 1 a 15 dias.',
    },
  ];

  const handleDocumentPress = (document) => {
    navigation.navigate('DocumentView', { document });
  };

  const renderDocument = (document) => (
    <TouchableOpacity
      key={document.id}
      style={styles.documentCard}
      onPress={() => handleDocumentPress(document)}
    >
      <View style={styles.documentHeader}>
        <Text style={styles.cidText}>{document.cid}</Text>
        <View style={[styles.statusBadge, { backgroundColor: document.statusColor }]}>
          <Text style={styles.statusText}>{document.status}</Text>
        </View>
      </View>
      
      <Text style={styles.disclaimerText}>{document.disclaimer}</Text>
      
      <Text style={styles.documentTitle}>{document.type}</Text>
      
      <Text style={styles.validityText}>{document.validity}</Text>
      
      <View style={styles.prescribedByContainer}>
        <Text style={styles.prescribedByText}>Prescrito por {document.prescribedBy}</Text>
        <Icon name="checkmark-circle" size={16} color="#4CAF50" />
      </View>
    </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Prescrições e Atestados</Text>
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

        {/* Filtro de Ordenação */}
        <View style={styles.filterContainer}>
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

        {/* Lista de Documentos */}
        <View style={styles.documentsContainer}>
          {documents.map(renderDocument)}
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
  filterContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-end',
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
  documentsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  documentCard: {
    backgroundColor: '#F2F2F7',
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  documentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cidText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
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
  disclaimerText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  validityText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  prescribedByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  prescribedByText: {
    fontSize: 14,
    color: '#666',
  },
});

export default Prescriptions;
