import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SplashScreenProps } from '../types/navigation'; // Seu tipo de navegação
import { Container } from '../components/layout/Container'; // Seu componente de Container

export default function SplashScreen() {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // NÃO HÁ MAIS LÓGICA DE NAVEGAÇÃO AQUI
  // O App.tsx e AuthContext cuidam disso.

  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Animated.Image
          source={require('../assets/logo-isaude-splash.png')}
          className="w-48 h-48"
          resizeMode="contain"
          style={{ opacity: fadeAnim }}
        />
      </View>
    </Container>
  );
}