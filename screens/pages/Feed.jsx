// Feed.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import FeedBody from '../components/feedComponents/FeedBody';
import HomeFeed from './HomeFeed';
import { useFeed } from '../components/FeedContext';

export const Feed = () => {
  const { showHomeFeed } = useFeed();

  return (
    <View style={styles.container}>
      <Header />
      {showHomeFeed ? <HomeFeed /> : <FeedBody />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
