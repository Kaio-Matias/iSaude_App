import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando os SVGs
import BottomImage from '../../assets/bottomShortcuts/BottomImage.svg';
import BottomImageActive from '../../assets/bottomShortcuts/BottomImageActive.svg';
import NotaIcon from '../../assets/bottomShortcuts/Nota.svg';
import FotosEVideosIcon from '../../assets/bottomShortcuts/FotosEVideos.svg';
import PulseIcon from '../../assets/bottomShortcuts/Pulse.svg';

const BUTTON_SIZE = 56;
const OPTION_SIZE = 40; // Tamanho menor para as opções - mais proporcional
const MAIN_ICON_SIZE = 80; // Tamanho maior para o ícone principal

const FloatingActionButton = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [buttonRotation] = useState(new Animated.Value(0));

  const options = [
    { id: 'nota', icon: NotaIcon, label: 'Nota' },
    { id: 'fotos', icon: FotosEVideosIcon, label: 'Fotos' },
    { id: 'pulse', icon: PulseIcon, label: 'Flash' },
  ];

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(buttonRotation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const handleOptionPress = (optionId) => {
    console.log(`Opção selecionada: ${optionId}`);
    
    switch (optionId) {
      case 'nota':
        navigation.navigate('CreatePost');
        break;
      case 'fotos':
        // Lógica para fotos e vídeos
        console.log('Fotos e vídeos selecionados');
        break;
      case 'pulse':
        navigation.navigate('CreateFlash');
        break;
      default:
        break;
    }
  };

  const buttonRotate = buttonRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View style={styles.container}>
      {/* Opções do menu */}
      {isOpen && options.map((option, index) => {
        const scale = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

        const translateY = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -(index + 1) * (OPTION_SIZE + 12)], // Espaçamento ajustado
        });

        const opacity = animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1],
        });

        const IconComponent = option.icon;

        return (
          <Animated.View
            key={option.id}
            style={[
              styles.optionContainer,
              {
                transform: [{ scale }, { translateY }],
                opacity,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionPress(option.id)}
              activeOpacity={0.6}
            >
              <IconComponent width={OPTION_SIZE} height={OPTION_SIZE} />
              <Text style={styles.optionLabel}>{option.label}</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}

      {/* Botão principal */}
      <Animated.View
        style={[
          styles.mainButtonContainer,
          { transform: [{ rotate: buttonRotate }] },
        ]}
      >
        <TouchableOpacity
          style={styles.mainButton}
          onPress={toggleMenu}
          activeOpacity={0.8}
        >
          {isOpen ? (
            <BottomImageActive 
              width={MAIN_ICON_SIZE} 
              height={MAIN_ICON_SIZE} 
            />
          ) : (
            <BottomImage
              width={MAIN_ICON_SIZE} 
              height={MAIN_ICON_SIZE} 
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    alignItems: 'flex-end',
    zIndex: 99999,
    elevation: 9999,
  },
  mainButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: 'rgba(66, 103, 246, 0.1)', // Fundo azul sutil
    borderWidth: 2,
    borderColor: 'rgba(66, 103, 246, 0.3)', // Borda azul sutil
  },
  mainButtonContainer: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    position: 'absolute',
    bottom: BUTTON_SIZE + 6, // Posicionado acima do botão principal
    right: 0,
    width: OPTION_SIZE,
    height: OPTION_SIZE + 20, // Altura extra para o label
    alignItems: 'center',
  },
  optionButton: {
    width: OPTION_SIZE,
    height: OPTION_SIZE,
    borderRadius: OPTION_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo branco semi-transparente
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', // Borda sutil
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  optionLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default FloatingActionButton;
