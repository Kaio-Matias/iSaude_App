import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { FilterIcon, StarIcon } from './HealthIcons';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const DoctorsScreen = ({ onNavigate }) => {
  // Dados mockados
  const doctors = [
    {
      id: 1,
      name: 'Dr. Ana Paula',
      specialty: 'Clínico Geral',
      rating: 5,
      price: 'R$ 199,00',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Dr. Carlos Silva',
      specialty: 'Cardiologista',
      rating: 4,
      price: 'R$ 250,00',
      image: 'https://i.pravatar.cc/150?img=2'
    }
  ];

  const renderDoctor = ({ item }) => (
    <View style={healthStyles.doctorCard}>
      <Image source={{ uri: item.image }} style={healthStyles.doctorImage} />
      <View style={healthStyles.doctorInfo}>
        <Text style={healthStyles.doctorName}>{item.name}</Text>
        <Text style={healthStyles.doctorSpecialty}>{item.specialty}</Text>
        <View style={healthStyles.ratingContainer}>
          {[...Array(item.rating)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </View>
        <Text style={healthStyles.doctorPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity 
        style={healthStyles.scheduleButton}
        onPress={() => onNavigate('appointment-question')}
      >
        <Text style={healthStyles.scheduleButtonText}>Agendar Consulta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Médicos" 
        onBackPress={() => onNavigate('home')}
        showProfileImage={true}
      />

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoctor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DoctorsScreen;
