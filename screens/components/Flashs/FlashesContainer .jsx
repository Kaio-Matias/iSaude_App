// src/components/FlashesContainer/FlashesContainer.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FlashItem from './Flash.jsx'; // Ajuste o caminho se necessário
import { useStoryViewer } from '../../contexts/StoryViewerContext';

// Debug: Verificar se o useStoryViewer está sendo importado
console.log('useStoryViewer imported:', typeof useStoryViewer);

// Dados de exemplo com múltiplos stories
const flashData = [
  { 
    id: '1', 
    name: '@dra.mari...', 
    imageUri: 'https://i.pravatar.cc/150?img=1', 
    isSeen: false,
    story: {
      id: '1',
      username: 'Dra. Maria Genda',
      profileImage: 'https://i.pravatar.cc/150?img=1',
      media: [
        {
          id: '1-1',
          url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '1-2',
          url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '1-3',
          url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '1-4',
          url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          type: 'video',
          duration: 8000,
        },
      ],
    }
  },
  { 
    id: '2', 
    name: '@dr.marco...', 
    imageUri: 'https://i.pravatar.cc/150?img=2', 
    isSeen: false,
    story: {
      id: '2',
      username: 'Dr. Marcos Toledo',
      profileImage: 'https://i.pravatar.cc/150?img=2',
      media: [
        {
          id: '2-1',
          url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '2-2',
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
      ],
    }
  },
  { 
    id: '3', 
    name: '@jamileco...', 
    imageUri: 'https://i.pravatar.cc/150?img=3', 
    isSeen: false,
    story: {
      id: '3',
      username: 'Jamile Correa',
      profileImage: 'https://i.pravatar.cc/150?img=3',
      media: [
        {
          id: '3-1',
          url: 'https://images.unsplash.com/photo-1579684385108-a4000b0f9c2a?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '3-2',
          url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '3-3',
          url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '3-4',
          url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '3-5',
          url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          type: 'video',
          duration: 10000,
        },
      ],
    }
  },
  { 
    id: '4', 
    name: '@anapaula...', 
    imageUri: 'https://i.pravatar.cc/150?img=4', 
    isSeen: true,
    story: {
      id: '4',
      username: 'Ana Paula',
      profileImage: 'https://i.pravatar.cc/150?img=4',
      media: [
        {
          id: '4-1',
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
      ],
    }
  },
  { 
    id: '5', 
    name: 'teste', 
    imageUri: 'https://i.pravatar.cc/150?img=5', 
    isSeen: true,
    story: {
      id: '5',
      username: 'Teste User',
      profileImage: 'https://i.pravatar.cc/150?img=5',
      media: [
        {
          id: '5-1',
          url: 'https://images.unsplash.com/photo-1579684385108-a4000b0f9c2a?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '5-2',
          url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
      ],
    }
  },
  { 
    id: '6', 
    name: 'teste', 
    imageUri: 'https://i.pravatar.cc/150?img=6', 
    isSeen: false,
    story: {
      id: '6',
      username: 'Teste User 2',
      profileImage: 'https://i.pravatar.cc/150?img=6',
      media: [
        {
          id: '6-1',
          url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
      ],
    }
  },
  { 
    id: '7', 
    name: 'teste', 
    imageUri: 'https://i.pravatar.cc/150?img=7', 
    isSeen: false,
    story: {
      id: '7',
      username: 'Teste User 3',
      profileImage: 'https://i.pravatar.cc/150?img=7',
      media: [
        {
          id: '7-1',
          url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '7-2',
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
        {
          id: '7-3',
          url: 'https://images.unsplash.com/photo-1579684385108-a4000b0f9c2a?q=80&w=400&auto=format&fit=crop',
          type: 'image',
          duration: 5000,
        },
      ],
    }
  },
];

const FlashesContainer = () => {
  // Debug: Verificar se o hook está funcionando
  console.log('FlashesContainer rendering, useStoryViewer type:', typeof useStoryViewer);
  
  let showGlobalStory;
  try {
    const storyViewer = useStoryViewer();
    showGlobalStory = storyViewer?.showGlobalStory;
    console.log('useStoryViewer hook result:', storyViewer);
  } catch (error) {
    console.error('Error using useStoryViewer:', error);
    showGlobalStory = () => console.log('showGlobalStory not available');
  }

  const handleFlashPress = (flash) => {
    console.log('Flash pressed:', flash?.id, flash?.name);
    console.log('Flash story data:', flash?.story);
    
    if (flash?.story) {
      console.log('Calling showGlobalStory with story:', flash.story.id);
      showGlobalStory(flash.story);
    } else {
      console.error('No story data found for flash:', flash);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Flashs</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          
          {/* Componente "Seu Flash" adicionado aqui */}
          <TouchableOpacity style={styles.yourFlashContainer}>
            <View style={styles.yourFlashCircle}>
              <View style={styles.plusIconCircle}>
                <Text style={styles.plusIconText}>+</Text>
              </View>
            </View>
            <Text style={styles.yourFlashName}>Seu Flash</Text>
          </TouchableOpacity>

                  {/* Mapeamento dos outros flashes */}
        {flashData.map(item => (
          <FlashItem
            key={item.id}
            name={item.name}
            imageUri={item.imageUri}
            isSeen={item.isSeen}
            storyCount={item.story.media.length}
            viewedCount={item.isSeen ? item.story.media.length : 0}
            onPress={() => handleFlashPress(item)}
          />
        ))}
        </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  // --- ESTILOS ADICIONADOS PARA O "SEU FLASH" ---
  yourFlashContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  yourFlashCircle: {
    width: 87,
    height: 85,
    borderRadius: 34,
    backgroundColor: '#6C89F5', // Cor azul do ícone
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconText: {
    color: '#6C89F5', // Cor azul do ícone
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32, // Ajuste para centralizar o "+" verticalmente
  },
  yourFlashName: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default FlashesContainer;