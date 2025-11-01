import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PostActions = ({ stats, likedBy }) => {
  return (
    <View style={styles.container}>
      {/* Seção de estatísticas */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>{stats.comments} Comentários • {stats.shares} Compartilhamentos</Text>
        <Text style={styles.likedByText}>{likedBy}</Text>
      </View>

      {/* Linha divisória */}
      <View style={styles.divider} />

      {/* Seção de botões de ação */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={22} color="#65676B" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="message-circle" size={22} color="#65676B" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="send" size={22} color="#65676B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
  },
  statsText: {
    color: '#65676B',
    fontSize: 14,
  },
  likedByText: {
    color: '#65676B',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#CED0D4',
    marginVertical: 10, 
  },
  buttonsContainer: {
    flexDirection: 'row',
   
    paddingBottom: 10,
  },
  actionButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: 50,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostActions;