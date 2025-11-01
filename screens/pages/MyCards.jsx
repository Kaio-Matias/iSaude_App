import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyCards = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'mastercard',
      number: '**** **** **** 0123',
      issuer: 'Cartão Inter',
      color: '#FF6B35',
    },
    {
      id: 2,
      type: 'visa',
      number: '**** **** **** 1234',
      issuer: 'Cartão Banco do Brasil',
      color: '#1A1F71',
    },
  ]);

  const handleAddCard = () => {
    navigation.navigate('AddCard');
  };

  const handleDeleteCard = (card) => {
    Alert.alert(
      'Excluir Cartão',
      'Você tem certeza que deseja excluir esse Cartão?',
      'Não é possível desfazer essa ação.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim, Excluir', style: 'destructive', onPress: () => deleteCard(card.id) },
      ]
    );
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const renderCardIcon = (type) => {
    if (type === 'mastercard') {
      return (
        <View style={[styles.cardIcon, { backgroundColor: '#FF6B35' }]}>
          <Text style={styles.cardIconText}>MC</Text>
        </View>
      );
    } else if (type === 'visa') {
      return (
        <View style={[styles.cardIcon, { backgroundColor: '#1A1F71' }]}>
          <Text style={styles.cardIconText}>V</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus Cartões</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lista de cartões */}
        {cards.map((card) => (
          <View key={card.id} style={styles.cardItem}>
            <View style={styles.cardLeft}>
              {renderCardIcon(card.type)}
              <View style={styles.cardInfo}>
                <Text style={styles.cardNumber}>{card.number}</Text>
                <Text style={styles.cardIssuer}>{card.issuer}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleDeleteCard(card)}>
              <Icon name="trash" size={20} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Botão adicionar cartão */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
          <Text style={styles.addButtonText}>Novo Cartão</Text>
          <Icon name="add" size={20} color="#4267F6" />
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
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardIcon: {
    width: 40,
    height: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIconText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardInfo: {
    flex: 1,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  cardIssuer: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default MyCards;
