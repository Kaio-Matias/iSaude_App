import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Importação dos componentes de chat
import { ChatHeader } from '../components/Msg/ChatHeader';
import { ChatSearchBar } from '../components/Msg/ChatSearchBar';
import { MessageBubble } from '../components/Msg/MessageBubble';
import { CallStatus } from '../components/Msg/CallStatus';
import { KeyboardAwareInput } from '../components/Msg/KeyboardAwareInput';

// Importação dos dados
import { chatMessagesData } from '../data/chatMessagesData';

export const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { conversation } = route.params;
  const scrollViewRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Carregar mensagens do chat
    const chatMessages = chatMessagesData[conversation.id] || [];
    setMessages(chatMessages);
  }, [conversation.id]);

  // Função para voltar
  const handleBack = () => {
    navigation.goBack();
  };

  // Função para abrir busca
  const handleSearch = () => {
    setShowSearch(true);
  };

  // Função para fechar busca
  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchText('');
  };

  // Função para opções
  const handleOptions = () => {
    Alert.alert('Opções', 'Menu de opções do chat');
  };

  // Função para enviar mensagem
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        text: newMessage,
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isFromContact: false,
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage('');
      
      // Scroll automático para a nova mensagem
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  // Função para anexo
  const handleAttachment = () => {
    Alert.alert('Anexo', 'Selecionar arquivo para anexar');
  };

  // Função para busca no chat
  const handleSearchInChat = (text) => {
    setSearchText(text);
    // Implementar lógica de busca nas mensagens
  };

  // Função para navegação da busca
  const handleSearchNavigation = (direction) => {
    Alert.alert('Busca', `Navegar ${direction} nos resultados`);
  };

  // Função para calendário
  const handleCalendar = () => {
    Alert.alert('Calendário', 'Abrir calendário');
  };

  return (
    <View style={styles.container}>
      <ChatHeader
        contact={conversation}
        onBack={handleBack}
        onSearch={handleSearch}
        onOptions={handleOptions}
      />
      
      {showSearch && (
        <ChatSearchBar
          value={searchText}
          onChangeText={handleSearchInChat}
          onClose={handleCloseSearch}
          onUp={() => handleSearchNavigation('para cima')}
          onDown={() => handleSearchNavigation('para baixo')}
          onCalendar={handleCalendar}
        />
      )}
      
      <ScrollView 
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.dateSeparator}>
          <Text style={styles.dateText}>Hoje</Text>
        </View>
        
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={!message.isFromContact}
            contactImage={conversation.profileImage}
          />
        ))}
        
        {/* Status de chamadas (apenas para Dra. Maria Genda) */}
        {conversation.id === '2' && (
          <>
            <CallStatus time="17:00" isReceived={true} />
            <CallStatus time="17:00" isReceived={false} />
          </>
        )}
      </ScrollView>
      
      <KeyboardAwareInput
        value={newMessage}
        onChangeText={setNewMessage}
        onSend={handleSendMessage}
        onAttachment={handleAttachment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContentContainer: {
    paddingBottom: 100,
  },
  dateSeparator: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  dateText: {
    fontSize: 14,
    color: '#8E8E93',
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
