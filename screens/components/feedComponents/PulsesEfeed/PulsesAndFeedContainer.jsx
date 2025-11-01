import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe seus SVGs. Certifique-se que o caminho e o nome estão corretos.
// É necessário ter a biblioteca 'react-native-svg' e 'react-native-svg-transformer' configuradas.
import Pulses from '../../../../assets/FeedEpulse/Pulses.svg';
import Feed from '../../../../assets/FeedEpulse/Feed.svg'; // Corrigi o nome do import e do arquivo

const PulsesAndFeedContainer = () => {
  const navigation = useNavigation();

  const handlePulsesPress = () => {
    navigation.navigate('Pulses');
  };

  return (
    // SafeAreaView é bom para evitar que o conteúdo fique atrás de notches ou da status bar.
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* Este container agrupa os SVGs */}
        <View style={styles.svgWrapper}>
          <Feed width={85} height={85} />
          <TouchableOpacity onPress={handlePulsesPress}>
            <Pulses width={85} height={85} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // O componente agora se ajusta ao conteúdo, em vez de preencher a tela.
  },
  container: {
    // O container principal.
  },
  // Este container agrupa os SVGs e os organiza horizontalmente
  svgWrapper: {
    flexDirection: 'row', // Alinha os SVGs lado a lado
    justifyContent: 'flex-end', // Alinha os ícones no final (à direita)
    alignItems: 'center', // Centraliza os SVGs verticalmente
    paddingHorizontal: 10, // Adiciona um espaçamento

    // COMENTÁRIO: Para alterar a altura da barra, modifique o valor de 'height' abaixo.
    height: 50,

    // COMENTÁRIO: A propriedade 'gap' adiciona um espaçamento entre os ícones.
    // Ela funciona bem em versões mais novas do React Native (0.71+).
    // Se não funcionar no seu projeto, você pode remover a linha abaixo...
    gap: 10,
    // ...e adicionar uma margem no segundo ícone diretamente no componente, assim:
    // <Pulses width={90} height={90} style={{ marginLeft: 4 }} />
  },
});

export default PulsesAndFeedContainer;
