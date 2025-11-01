// components/PhotoGrid.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const PhotoGrid = ({ 
  images, 
  title = "Achamos que você pode gostar",
  onImagePress,
  columns = 3
}) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1579684385108-a4000b0f9c2a?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582759902888-29a39ac018c6?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582759914486-1a86847c177a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628162601784-90a6f44d88e0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628162665042-3e6f98108a8a?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628162663183-5098e94f283d?q=80&w=1974&auto=format&fit=crop',
  ];

  const imagesToRender = images || defaultImages;
  const itemWidth = `${100 / columns - 2}%`;

  return (
    <View style={styles.photoGridContainer}>
      <Text style={styles.photoGridTitle}>{title}</Text>
      <View style={styles.photoGrid}>
        {imagesToRender.map((img, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.photoItem, { width: itemWidth }]}
            onPress={() => onImagePress && onImagePress(img, index)}
          >
            <Image 
              source={{ uri: img }} 
              style={styles.photoImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoGridContainer: {
    marginTop: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  photoGridTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1C1C1E',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoItem: {
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});