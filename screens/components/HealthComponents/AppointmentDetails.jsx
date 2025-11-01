import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import { CreditCardIcon, CheckIcon } from './HealthIcons';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const AppointmentDetails = ({ onNavigate }) => {
  const [selectedPayment, setSelectedPayment] = useState('credit');

  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Agendamento" 
        onBackPress={() => onNavigate('appointment-question')}
        showProfileImage={true}
      />

      <View style={healthStyles.detailsContainer}>
        <Text style={healthStyles.questionText}>Você tem dúvidas ou preocupações?</Text>
        <TextInput
          style={healthStyles.textArea}
          placeholder="Descreva suas dúvidas..."
          multiline
          numberOfLines={4}
        />

        <View style={healthStyles.consultationInfo}>
          <Text style={healthStyles.consultationTitle}>Consulta Online</Text>
          <Text style={healthStyles.consultationDate}>25/12/2024 - 10:30</Text>
          <Text style={healthStyles.consultationPrice}>R$ 199,00</Text>
        </View>

        <View style={healthStyles.paymentSection}>
          <Text style={healthStyles.sectionTitle}>Forma de Pagamento</Text>
          <TouchableOpacity 
            style={healthStyles.paymentOption}
            onPress={() => setSelectedPayment('credit')}
          >
            <CreditCardIcon />
            <Text style={healthStyles.paymentText}>Cartão de Crédito</Text>
            {selectedPayment === 'credit' && <CheckIcon />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={healthStyles.continueButton}
          onPress={() => onNavigate('calendar')}
        >
          <Text style={healthStyles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentDetails;
