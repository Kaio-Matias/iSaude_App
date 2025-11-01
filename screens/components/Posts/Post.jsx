import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';

const Post = ({ data }) => {
  return (
    <View style={styles.container}>
      <PostHeader
        user={data.user}
        source={data.source}
        timestamp={data.timestamp}
      />
      <PostContent text={data.contentText} image={data.contentImage} />
      <PostActions stats={data.stats} likedBy={data.likedBy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    borderRadius:20,
    margin:10,
    // Adiciona uma sombra sutil no Android e iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default Post;
