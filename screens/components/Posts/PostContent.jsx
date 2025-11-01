import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PostContent = ({ text, image }) => {
  return (
    <View style={styles.container}>
      {text && <Text style={styles.contentText}>{text}</Text>}
      {image && <Image source={{ uri: image }} style={styles.contentImage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  contentText: {
    fontSize: 16,
    color: '#050505',
    paddingHorizontal: 15,
    marginBottom: 10,
    lineHeight: 22,
  },
  contentImage: {
    width: width, // A imagem ocupará toda a largura
    height: width * 0.75, // Proporção 4:3, ajuste conforme necessário
    resizeMode: 'cover',
  },
});

export default PostContent;