import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountHistory = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('recent');

  const filters = [
    { id: 'recent', label: 'De recentes a mais antigos' },
    { id: 'all', label: 'Todas as datas' },
    { id: 'type', label: 'Tipo de Atualização' },
  ];

  const historyData = {
    today: [
      { id: 1, type: 'email', title: 'Email', description: 'Você alterou seu email para seuemail@exemplo.com', time: 'Há 05 Minutos', icon: 'mail' },
      { id: 2, type: 'biography', title: 'Biografia', description: 'Você alterou sua biografia para Momento de gra...', time: 'Há 05 Minutos', icon: 'create' },
      { id: 3, type: 'biography', title: 'Biografia', description: 'Você alterou sua biografia para Momento de gra...', time: 'Há 05 Minutos', icon: 'create' },
    ],
    week: [
      { id: 4, type: 'phone', title: 'Telefone', description: 'Você alterou seu telefone para (00) 94002-8322', time: 'Há 05 Minutos', icon: 'call' },
      { id: 5, type: 'privacy', title: 'Privacidade', description: 'Você tornou sua conta privada', time: 'Há 05 Minutos', icon: 'eye-off' },
      { id: 6, type: 'name', title: 'Nome', description: 'Você alterou seu nome para Carlos Magno', time: 'Há 05 Minutos', icon: 'person' },
      { id: 7, type: 'username', title: 'Nome de Usuário', description: 'Você alterou seu nome de usuário para carlos.magno', time: 'Há 05 Minutos', icon: 'settings' },
      { id: 8, type: 'biography', title: 'Biografia', description: 'Você alterou sua biografia para Momento de gra...', time: 'Há 05 Minutos', icon: 'create' },
    ],
    month: [
      { id: 9, type: 'phone', title: 'Telefone', description: 'Você alterou seu telefone para (00) 94002-8922', time: 'Há 05 Minutos', icon: 'call' },
      { id: 10, type: 'email', title: 'Email', description: 'Você alterou seu email para seuemail@exemplo.com', time: 'Há 05 Minutos', icon: 'mail' },
    ],
  };

  const getIconColor = (type) => {
    const colors = {
      email: '#4267F6',
      biography: '#4267F6',
      phone: '#4267F6',
      privacy: '#4267F6',
      name: '#4267F6',
      username: '#4267F6',
    };
    return colors[type] || '#4267F6';
  };

  const renderHistoryItem = (item) => (
    <TouchableOpacity key={item.id} style={styles.historyItem}>
      <Icon name={item.icon} size={20} color={getIconColor(item.type)} />
      <View style={styles.historyInfo}>
        <Text style={styles.historyTitle}>{item.title}</Text>
        <Text style={styles.historyDescription}>{item.description}</Text>
        <Text style={styles.historyTime}>{item.time}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histórico da Conta</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Filtros */}
      <View style={styles.filtersContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              selectedFilter === filter.id && styles.filterButtonActive
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <Text style={[
              styles.filterButtonText,
              selectedFilter === filter.id && styles.filterButtonTextActive
            ]}>
              {filter.label}
            </Text>
            <Icon name="chevron-down" size={16} color={selectedFilter === filter.id ? '#FFFFFF' : '#666'} />
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hoje */}
        <View style={styles.timeSection}>
          <Text style={styles.timeSectionTitle}>Hoje</Text>
          {historyData.today.map(renderHistoryItem)}
        </View>

        {/* 7 dias */}
        <View style={styles.timeSection}>
          <Text style={styles.timeSectionTitle}>7 dias</Text>
          {historyData.week.map(renderHistoryItem)}
        </View>

        {/* 30 dias */}
        <View style={styles.timeSection}>
          <Text style={styles.timeSectionTitle}>30 dias</Text>
          {historyData.month.map(renderHistoryItem)}
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
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: '#4267F6',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#666',
    marginRight: 5,
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  timeSection: {
    marginBottom: 20,
  },
  timeSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    marginLeft: 20,
  },
  historyItem: {
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
  historyInfo: {
    flex: 1,
    marginLeft: 15,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  historyDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
  historyTime: {
    fontSize: 12,
    color: '#999',
  },
});

export default AccountHistory;
