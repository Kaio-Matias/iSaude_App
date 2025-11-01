import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { InicialText } from '../InicialText';
import { ProfileItem } from './ProfileItem';
import { PROFILES } from '../../data/profilesData';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';

const FeedBody = () => {
  const navigation = useNavigation();
  
  const renderItem = ({ item }) => (
    <ProfileItem
      name={item.name}
      specialism={item.specialism}
      image={item.image}
    />
  );
  
  return (
    <View style={styles.container}>
      <Header></Header>
      <FlatList
        data={PROFILES}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={[styles.list, { paddingBottom: 100 }]}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <InicialText
              Title="Vamos começar sua jornada!"
              subTitle="Encontre profissionais, perfis e temas do seu interesse para personalizar seu feed com conteúdo relevante."
              style={{
                fontSize: 16,
                lineHeight: 22,
                width: '100%',
              }}
            />
          </View>
        }
        ListFooterComponent={
          <TouchableOpacity onPress={
            () => navigation.navigate("ProfileForFollow")
            }>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Encontrar mais perfis</Text>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default FeedBody;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: 'rgba(236, 234, 234, 1)',
  },
  headerContainer: {
    width: '100%',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 80,
  },
  list: {
    paddingHorizontal: 20,
  },
  footer: {
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontWeight: '600',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    borderBottomWidth: 2,
    marginTop: 10,
  },
});