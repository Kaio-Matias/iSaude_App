import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importação dos componentes de Msg
import { MsgHeader } from '../../components/Msg/MsgHeader';
import { MsgSearchBar } from '../../components/Msg/MsgSearchBar';
import { MsgTabs } from '../../components/Msg/MsgTabs';
import { ConversationItem } from '../../components/Msg/ConversationItem';
import { EmptyConversations } from '../../components/Msg/EmptyConversations';
import { RequestNotification } from '../../components/Msg/RequestNotification';

// Importação dos dados
import { conversationsData } from '../../data/conversationsData';

export const Msg = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('principal');
  const [searchText, setSearchText] = useState('');

  // Função para lidar com mudanças na aba
  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
  };

  // Função para lidar com clique em conversa
  const handleConversationPress = (conversation) => {
    navigation.navigate('Chat', { conversation });
  };

  // Função para lidar com mudanças no texto de busca
  const handleSearchChange = (text) => {
    setSearchText(text);
    // Aqui você pode implementar a lógica de busca
    console.log('Buscando conversas por:', text);
  };



  // Filtrar conversas baseado na busca
  const filterConversations = (conversations) => {
    if (!searchText.trim()) return conversations;
    
    return conversations.filter(conversation =>
      conversation.name.toLowerCase().includes(searchText.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // Obter conversas da aba ativa
  const getActiveConversations = () => {
    const conversations = conversationsData[activeTab] || [];
    return filterConversations(conversations);
  };

  const activeConversations = getActiveConversations();

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <MsgHeader />
      
      <MsgSearchBar 
        value={searchText}
        onChangeText={handleSearchChange}
      />
      
      <MsgTabs 
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      
      {activeTab === 'solicitacoes' && activeConversations.length > 0 && (
        <RequestNotification count={activeConversations.length} />
      )}
      
      <ScrollView 
        style={styles.conversationsList}
        contentContainerStyle={styles.conversationsContentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {activeConversations.length > 0 ? (
          activeConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              onPress={handleConversationPress}
            />
          ))
        ) : (
          <EmptyConversations />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  conversationsList: {
    flex: 1,
  },
  conversationsContentContainer: {
    paddingBottom: 20,
  },
});