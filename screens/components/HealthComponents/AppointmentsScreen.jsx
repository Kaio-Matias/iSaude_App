import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const AppointmentsScreen = ({ onNavigate }) => {
  const [selectedTab, setSelectedTab] = useState('proximas');

  // Dados mockados
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Ana Paula',
      specialty: 'Clínico Geral',
      date: '25/12/2024',
      time: '10:30',
      image: 'https://i.pravatar.cc/150?img=1'
    }
  ];

  const renderAppointment = ({ item }) => (
    <View style={healthStyles.appointmentCard}>
      <Image source={{ uri: item.image }} style={healthStyles.doctorImage} />
      <View style={healthStyles.appointmentInfo}>
        <Text style={healthStyles.doctorName}>{item.doctor}</Text>
        <Text style={healthStyles.doctorSpecialty}>{item.specialty}</Text>
        <Text style={healthStyles.appointmentDateTime}>
          {item.date} - {item.time}
        </Text>
      </View>
      <View style={healthStyles.appointmentActions}>
        <TouchableOpacity 
          style={healthStyles.detailsButton}
          onPress={() => onNavigate('appointment-detail')}
        >
          <Text style={healthStyles.detailsButtonText}>Ver Detalhes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={healthStyles.cancelButton}>
          <Text style={healthStyles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Minhas Consultas" 
        onBackPress={() => onNavigate('home')}
        showProfileImage={true}
      />

      <View style={healthStyles.tabsContainer}>
        <TouchableOpacity 
          style={[healthStyles.tab, selectedTab === 'proximas' && healthStyles.activeTab]}
          onPress={() => setSelectedTab('proximas')}
        >
          <Text style={[healthStyles.tabText, selectedTab === 'proximas' && healthStyles.activeTabText]}>
            Próximas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[healthStyles.tab, selectedTab === 'anteriores' && healthStyles.activeTab]}
          onPress={() => setSelectedTab('anteriores')}
        >
          <Text style={[healthStyles.tabText, selectedTab === 'anteriores' && healthStyles.activeTabText]}>
            Anteriores
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AppointmentsScreen;

