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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Appointments = () => {
  const navigation = useNavigation();

  const appointments = [
    {
      id: 1,
      doctor: {
        name: 'Dra. Maria Glenda',
        avatar: 'https://i.pravatar.cc/150?img=3',
        isVerified: true,
      },
      type: 'Consulta Geral',
      service: 'Teleconsulta',
      date: 'Hoje',
      time: '9:30',
      startsIn: '3 min',
      isStarting: true,
    },
    {
      id: 2,
      clinic: {
        name: 'Clínica Mais Saúde',
        icon: '🏥',
        isVerified: true,
      },
      type: 'Exames',
      service: 'Raio-X e Hemograma',
      date: 'Quinta, 1 de Maio',
      time: '9:30',
    },
    {
      id: 3,
      doctor: {
        name: 'Dra. Maria Glenda',
        avatar: 'https://i.pravatar.cc/150?img=3',
        isVerified: true,
      },
      type: 'Consulta Geral',
      service: 'Teleconsulta',
      date: 'Hoje',
      time: '9:30',
    },
    {
      id: 4,
      clinic: {
        name: 'Clínica Mais Saúde',
        icon: '🏥',
        isVerified: true,
      },
      type: 'Exames',
      service: 'Raio-X e Hemograma',
      date: 'Quinta, 1 de Maio',
      time: '9:30',
    },
  ];

  const handleAppointmentPress = (appointment) => {
    if (appointment.isStarting) {
      navigation.navigate('AppointmentRoom', { appointment });
    } else {
      navigation.navigate('AppointmentDetails', { appointment });
    }
  };

  const renderAppointment = (appointment) => (
    <TouchableOpacity
      key={appointment.id}
      style={styles.appointmentCard}
      onPress={() => handleAppointmentPress(appointment)}
    >
      <View style={styles.appointmentLeft}>
        {appointment.doctor ? (
          <Image source={{ uri: appointment.doctor.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.clinicIcon}>
            <Text style={styles.clinicIconText}>{appointment.clinic.icon}</Text>
          </View>
        )}
        <View style={styles.appointmentInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {appointment.doctor ? appointment.doctor.name : appointment.clinic.name}
            </Text>
            <Icon 
              name="checkmark-circle" 
              size={16} 
              color={appointment.doctor ? "#4CAF50" : "#9C27B0"} 
            />
          </View>
          <Text style={styles.type}>{appointment.type}</Text>
          <Text style={styles.service}>{appointment.service}</Text>
        </View>
      </View>
      
      <View style={styles.appointmentRight}>
        {appointment.isStarting && (
          <View style={styles.startsInBadge}>
            <Text style={styles.startsInText}>Inicia em {appointment.startsIn}</Text>
          </View>
        )}
        <Text style={styles.date}>{appointment.date}</Text>
        <Text style={styles.time}>{appointment.time}</Text>
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
        <Text style={styles.headerTitle}>Meus Agendamentos</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {appointments.map(renderAppointment)}
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
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  appointmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  appointmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  clinicIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  clinicIconText: {
    fontSize: 24,
  },
  appointmentInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  service: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  appointmentRight: {
    alignItems: 'flex-end',
  },
  startsInBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  startsInText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Appointments;
