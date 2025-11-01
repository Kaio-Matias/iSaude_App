import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const AppointmentQuestion = ({ onNavigate }) => {
  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Agendamento" 
        onBackPress={() => onNavigate('doctors')}
        showProfileImage={true}
      />

      <View style={healthStyles.questionContainer}>
        <View style={healthStyles.questionBox}>
          <Text style={healthStyles.questionText}>
            Você tem carinho que precisa cuidar a você mesmo?
          </Text>
        </View>
        
        <View style={healthStyles.consultationInfo}>
          <Text style={healthStyles.consultationTitle}>Consulta Online</Text>
          <Text style={healthStyles.consultationDate}>25/12/2024 - 10:30</Text>
          <Text style={healthStyles.consultationPrice}>R$ 199,00</Text>
        </View>

        <TouchableOpacity 
          style={healthStyles.continueButton}
          onPress={() => onNavigate('appointment-details')}
        >
          <Text style={healthStyles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentQuestion;

