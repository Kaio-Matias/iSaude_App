import React from 'react';
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

const AppointmentConfirmed = () => {
  const navigation = useNavigation();

  const appointmentData = {
    doctor: {
      name: 'Dra. Maria Glenda',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      specialty: 'Clínico Geral',
    },
    type: 'Consulta Geral',
    date: 'Segunda, 28 de Abril às 08:30',
    appointmentCode: '4S59-BE2025',
    payment: {
      value: 'R$ 50,90',
      method: 'PIX',
    },
    returnAvailable: true,
  };

  const handleViewAppointments = () => {
    navigation.navigate('Appointments');
  };

  const handleGoToHome = () => {
    navigation.navigate('HomeFeed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Ícone de Sucesso */}
        <View style={styles.successIconContainer}>
          <View style={styles.successIcon}>
            <Icon name="checkmark" size={40} color="#FFFFFF" />
          </View>
        </View>

        {/* Título de Confirmação */}
        <View style={styles.titleContainer}>
          <Text style={styles.confirmationTitle}>Agendamento Confirmado!</Text>
          <Text style={styles.confirmationSubtitle}>
            Sua consulta foi agendada com sucesso.
          </Text>
        </View>

        {/* Detalhes da Consulta */}
        <View style={styles.appointmentDetails}>
          {/* Informações do Médico */}
          <View style={styles.doctorCard}>
            <Image source={{ uri: appointmentData.doctor.avatar }} style={styles.doctorAvatar} />
            <View style={styles.doctorInfo}>
              <View style={styles.doctorNameContainer}>
                <Text style={styles.doctorName}>{appointmentData.doctor.name}</Text>
                <Icon name="checkmark-circle" size={16} color="#4CAF50" />
              </View>
              <Text style={styles.doctorSpecialty}>{appointmentData.doctor.specialty}</Text>
            </View>
            <View style={styles.returnAvailable}>
              <Text style={styles.returnText}>Retorno Disponível</Text>
              <View style={styles.returnDot} />
            </View>
          </View>

          {/* Tipo e Data */}
          <View style={styles.detailsCard}>
            <Text style={styles.serviceType}>{appointmentData.type}</Text>
            <Text style={styles.appointmentDate}>{appointmentData.date}</Text>
          </View>

          {/* Código do Agendamento */}
          <View style={styles.codeCard}>
            <Text style={styles.codeTitle}>Código do Agendamento</Text>
            <Text style={styles.codeValue}>{appointmentData.appointmentCode}</Text>
          </View>

          {/* Informações de Pagamento */}
          <View style={styles.paymentCard}>
            <Text style={styles.paymentTitle}>Pagamentos</Text>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentLabel}>Valor da Consulta</Text>
              <Text style={styles.paymentValue}>{appointmentData.payment.value}</Text>
            </View>
            <View style={styles.paymentMethod}>
              <Text style={styles.paymentMethodLabel}>Forma de Pagamento</Text>
              <Text style={styles.paymentMethodValue}>{appointmentData.payment.method}</Text>
            </View>
          </View>

          {/* Informações Adicionais */}
          <View style={styles.additionalInfoCard}>
            <Text style={styles.additionalInfoTitle}>Informações Importantes</Text>
            <Text style={styles.additionalInfoText}>
              • Chegue com 10 minutos de antecedência{'\n'}
              • Tenha em mãos documentos de identificação{'\n'}
              • Para teleconsulta, mantenha o aplicativo aberto{'\n'}
              • Em caso de cancelamento, faça com 24h de antecedência
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Botões de Ação */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.viewAppointmentsButton} onPress={handleViewAppointments}>
          <Text style={styles.viewAppointmentsText}>Ver Meus Agendamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={handleGoToHome}>
          <Text style={styles.homeButtonText}>Ir para o Início</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  successIconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  confirmationTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  confirmationSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  appointmentDetails: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  doctorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  returnAvailable: {
    alignItems: 'center',
  },
  returnText: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 5,
  },
  returnDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  serviceType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  appointmentDate: {
    fontSize: 16,
    color: '#666',
  },
  codeCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  codeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  paymentInfo: {
    marginBottom: 15,
  },
  paymentLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  paymentValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentMethodLabel: {
    fontSize: 14,
    color: '#666',
  },
  paymentMethodValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  additionalInfoCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  viewAppointmentsButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  viewAppointmentsText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppointmentConfirmed;
