import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';
import { CheckIcon } from './HealthIcons';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const AppointmentConfirmed = ({ onNavigate }) => {
  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Agendamento" 
        onBackPress={() => onNavigate('calendar')}
        showProfileImage={true}
      />

      <View style={healthStyles.confirmedContainer}>
        <CheckIcon />
        <Text style={healthStyles.confirmedTitle}>
          O agendamento foi respondido com sucesso!
        </Text>
        
        <View style={healthStyles.appointmentDetails}>
          <Text style={healthStyles.detailText}>Dr. Ana Paula</Text>
          <Text style={healthStyles.detailText}>Clínico Geral</Text>
          <Text style={healthStyles.detailText}>25/12/2024 - 10:30</Text>
          <Text style={healthStyles.detailText}>R$ 199,00</Text>
        </View>

        <TouchableOpacity 
          style={healthStyles.detailsButton}
          onPress={() => onNavigate('appointments')}
        >
          <Text style={healthStyles.detailsButtonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentConfirmed;
