import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Header from '../components/Header';
import FlashesContainer from '../components/Flashs/FlashesContainer ';
import Post from '../components/Posts/Post';
import { postData } from '../data/mockPostData';
import PulsesAndFeedContainer from '../components/feedComponents/PulsesEfeed/PulsesAndFeedContainer';

// Importe o SafeAreaView de 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeFeed = () => {
  return (
    <View style={styles.container}>
      {/* O StatusBar deve ser gerenciado a nível de aplicativo, não de componente */}
      <StatusBar barStyle="dark-content" />
      
      {/* O Header geralmente fica fixo no topo, fora da ScrollView */}
      <Header />
      
      <ScrollView style={styles.scrollViewContent}>
        <FlashesContainer />
        <PulsesAndFeedContainer />
        <Post data={postData} />
        <Post data={{ ...postData, id: '2' }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(239,241,245)',
  },
  scrollViewContent: {
    flex: 1,
  },
});

export default HomeFeed;