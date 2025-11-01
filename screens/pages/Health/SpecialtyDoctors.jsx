import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SpecialtyDoctors = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { specialty } = route.params || { name: 'Clínicos Gerais' };

  const featuredDoctors = [
    {
      id: 1,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      price: 'R$ 99,90',
      isSponsored: true,
    },
    {
      id: 2,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      price: 'R$ 99,90',
      isSponsored: true,
    },
  ];

  const allDoctors = [
    {
      id: 1,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
    },
    {
      id: 2,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
    },
    {
      id: 3,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      services: ['Teleconsulta', 'Presencial'],
      location: 'Mangueirão, Belém - PA',
      price: 'R$ 199,90',
    },
  ];

  const handleDoctorPress = (doctor) => {
    navigation.navigate('DoctorProfile', { doctor });
  };

  const renderFeaturedDoctor = ({ item }) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => handleDoctorPress(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.featuredAvatar} />
      <View style={styles.featuredInfo}>
        <View style={styles.featuredNameContainer}>
          <Text style={styles.featuredName}>{item.name}</Text>
          <Icon name="checkmark-circle" size={16} color="#4CAF50" />
        </View>
        <View style={styles.featuredSpecialty}>
          <Icon name="medical" size={14} color="#666" />
          <Text style={styles.featuredSpecialtyText}>{item.specialty}</Text>
        </View>
        <View style={styles.featuredServices}>
          {item.services.map((service, index) => (
            <View
              key={index}
              style={[
                styles.serviceButton,
                service === 'Teleconsulta' ? styles.teleconsultaButton : styles.presencialButton
              ]}
            >
              <Text style={styles.serviceButtonText}>{service}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.featuredPrice}>A partir de {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDoctor = ({ item }) => (
    <TouchableOpacity
      style={styles.doctorCard}
      onPress={() => handleDoctorPress(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
      <View style={styles.doctorInfo}>
        <View style={styles.doctorNameContainer}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Icon name="checkmark-circle" size={16} color="#4CAF50" />
        </View>
        <View style={styles.doctorSpecialty}>
          <Icon name="medical" size={14} color="#666" />
          <Text style={styles.doctorSpecialtyText}>{item.specialty}</Text>
        </View>
        <View style={styles.doctorServices}>
          {item.services.map((service, index) => (
            <View
              key={index}
              style={[
                styles.serviceButton,
                service === 'Teleconsulta' ? styles.teleconsultaButton : styles.presencialButton
              ]}
            >
              <Text style={styles.serviceButtonText}>{service}</Text>
            </View>
          ))}
        </View>
        <View style={styles.doctorLocation}>
          <Icon name="location" size={14} color="#666" />
          <Text style={styles.doctorLocationText}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.doctorRight}>
        <Text style={styles.doctorPrice}>A partir de {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{specialty.name} em Belém, PA</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Seção em Destaque */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredTitle}>Em destaque</Text>
            <View style={styles.sponsoredBadge}>
              <Text style={styles.sponsoredText}>Patrocinado</Text>
            </View>
          </View>
          <FlatList
            data={featuredDoctors}
            renderItem={renderFeaturedDoctor}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>

        {/* Lista Completa de Médicos */}
        <View style={styles.doctorsSection}>
          <FlatList
            data={allDoctors}
            renderItem={renderDoctor}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            contentContainerStyle={styles.doctorsList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  searchButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  featuredSection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    marginBottom: 20,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  sponsoredBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sponsoredText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1976D2',
  },
  featuredList: {
    paddingHorizontal: 20,
  },
  featuredCard: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  featuredInfo: {
    flex: 1,
  },
  featuredNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  featuredSpecialty: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 12,
  },
  featuredSpecialtyText: {
    fontSize: 14,
    color: '#666',
  },
  featuredServices: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  serviceButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  teleconsultaButton: {
    backgroundColor: '#E3F2FD',
  },
  presencialButton: {
    backgroundColor: '#FCE4EC',
  },
  serviceButtonText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#4267F6',
  },
  featuredPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  doctorsSection: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  doctorsList: {
    paddingHorizontal: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  doctorSpecialty: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  doctorSpecialtyText: {
    fontSize: 14,
    color: '#666',
  },
  doctorServices: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  doctorLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  doctorLocationText: {
    fontSize: 14,
    color: '#666',
  },
  doctorRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  doctorPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});

export default SpecialtyDoctors;
