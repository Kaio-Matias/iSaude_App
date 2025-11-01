// screens/SearchScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importação dos componentes
import { SearchBar } from './SearchBar';
import { TrendingTopics } from './TrendingTopics';
import { PhotoGrid } from './PhotoGrid';
import StandardHeader from '../StandardHeader';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  // Função para lidar com o clique em tópicos
  const handleTopicPress = (topic) => {
    Alert.alert('Tópico selecionado', `Você clicou em: ${topic.name}`);
    // Aqui você pode navegar para uma tela de detalhes do tópico
    // navigation.navigate('TopicDetails', { topic });
  };

  // Função para lidar com o clique em imagens
  const handleImagePress = (imageUrl, index) => {
    Alert.alert('Imagem selecionada', `Imagem ${index + 1} clicada`);
    // Aqui você pode navegar para uma tela de detalhes da imagem
    // navigation.navigate('ImageDetails', { imageUrl, index });
  };

  // Função para lidar com mudanças no texto de busca
  const handleSearchChange = (text) => {
    setSearchText(text);
    // Aqui você pode implementar a lógica de busca
    console.log('Buscando por:', text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StandardHeader title="Explorar" showBackButton={false} />
      
      <ScrollView style={styles.scrollView}>
        <SearchBar 
          placeholder="Busque por pessoas, assuntos e muito mais..."
          value={searchText}
          onChangeText={handleSearchChange}
        />
        
        <TrendingTopics 
          onTopicPress={handleTopicPress}
        />
        
        <PhotoGrid 
          title="Achamos que você pode gostar"
          onImagePress={handleImagePress}
          columns={3}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  scrollView: {
    flex: 1,
  },
});