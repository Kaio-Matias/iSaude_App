// src/components/FlashItem/FlashItem.js
import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { colors } from '../../styles/styles'; // Importando suas cores

// Substitua o 'require' por esta URI de dados Base64
const defaultImage = { uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00eiIvPjwvc3ZnPg==' };

const FlashItem = ({ imageUri, name, isSeen, onPress, storyCount = 1, viewedCount = 0 }) => {
  const [isPressed, setIsPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  // A lógica agora funciona perfeitamente para ambos os casos
  const imageSource = imageUri ? { uri: imageUri } : defaultImage;

  // Calcular quantos stories não foram vistos
  const unseenCount = storyCount - viewedCount;
  const hasUnseenStories = unseenCount > 0;

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles.imageContainer, 
          isSeen && styles.seenBorder,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          }
        ]}
      >
        <Image source={imageSource} style={styles.image} />
        
        {/* Indicador de stories não vistos */}
        {hasUnseenStories && (
          <View style={styles.unseenIndicator}>
            <Text style={styles.unseenCount}>
              {unseenCount > 9 ? '9+' : unseenCount}
            </Text>
          </View>
        )}
        
        {/* Indicador de progresso dos stories vistos */}
        {viewedCount > 0 && viewedCount < storyCount && (
          <View style={styles.progressRing}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  width: `${(viewedCount / storyCount) * 100}%` 
                }
              ]} 
            />
          </View>
        )}
      </Animated.View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 15,
  },
  imageContainer: {
    width: 87,
    height: 85,
    borderRadius: 40,
    borderWidth: 3.5,
    borderColor: colors.principalColor, // Usando a cor principal para a borda
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    position: 'relative',
  },
  seenBorder: {
    borderColor: '#ccc', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
  },
  unseenIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  unseenCount: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  progressRing: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.principalColor,
    borderRadius: 40,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default FlashItem;