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

const ExamResults = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('recent');

  const examResults = [
    {
      id: 1,
      cid: 'CID-10 RS3',
      type: 'Exames de 27 de Abril',
      status: 'Em Liberação',
      statusColor: '#2196F3',
      subtitle: 'Parcialmente Liberado',
      examinedBy: 'Laboratório Exames TOP',
      isVerified: true,
      disclaimer: 'O presente atestado é válido para finalidades previstas no art. 143 T do Decreto 2702 de 05/01/1997 e Resolução CFM 1931/09 e será necessário para justificar o Afastamento do Trabalho de 1 a 15 dias.',
    },
    {
      id: 2,
      cid: 'CID-10 RS3',
      type: 'Exames de 21 de Abril',
      status: 'Liberado',
      statusColor: '#4CAF50',
      subtitle: 'Liberado em 22 de Abril de 2025',
      examinedBy: 'Clínica Mais Saúde',
      isVerified: true,
      disclaimer: 'O presente atestado é válido para finalidades previstas no art. 143 T do Decreto 2702 de 05/01/1997 e Resolução CFM 1931/09 e será necessário para justificar o Afastamento do Trabalho de 1 a 15 dias.',
    },
  ];

  const handleExamPress = (exam) => {
    navigation.navigate('ExamDetail', { exam });
  };

  const handleUploadExam = () => {
    navigation.navigate('UploadExam');
  };

  const renderExamResult = (exam) => (
    <TouchableOpacity
      key={exam.id}
      style={styles.examCard}
      onPress={() => handleExamPress(exam)}
    >
      <View style={styles.examHeader}>
        <Text style={styles.cidText}>{exam.cid}</Text>
        <View style={[styles.statusBadge, { backgroundColor: exam.statusColor }]}>
          <Text style={styles.statusText}>{exam.status}</Text>
        </View>
      </View>
      
      <Text style={styles.disclaimerText}>{exam.disclaimer}</Text>
      
      <Text style={styles.examTitle}>{exam.type}</Text>
      
      <Text style={styles.examSubtitle}>{exam.subtitle}</Text>
      
      <View style={styles.examinedByContainer}>
        <Text style={styles.examinedByText}>Examinado por {exam.examinedBy}</Text>
        <Icon name="checkmark-circle" size={16} color="#9C27B0" />
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
        <Text style={styles.headerTitle}>Resultados de Exames</Text>
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

        {/* Botão de Upload */}
        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadExam}>
          <Icon name="add" size={20} color="#4267F6" />
          <Text style={styles.uploadButtonText}>Fazer Upload de Exame</Text>
        </TouchableOpacity>

        {/* Lista de Resultados */}
        <View style={styles.resultsContainer}>
          {examResults.map(renderExamResult)}
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3F2FD',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 10,
  },
  uploadButtonText: {
    color: '#4267F6',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  examCard: {
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
  examHeader: {
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
  examTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  examSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  examinedByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  examinedByText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ExamResults;
