
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { style } from '../styles/styles';
import IconsTitle from '../../assets/telaInicial/IconTitle.svg'
import LoadingAnimation from '../animations/LoadingAnimations'; 

export default function Loading({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      navigation.replace('Localization'); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.loading}>
      <IconsTitle width={300} height={300} />
      
      {isLoading && <LoadingAnimation />}
    </View>
  );
}
