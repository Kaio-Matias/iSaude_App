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
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CompletedAppointment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params || {};

  const appointmentData = {
    doctor: {
      name: 'Dra. Maria Glenda',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      specialty: 'Clínico Geral',
    },
    type: 'Consulta Geral',
    status: 'Concluído',
    appointmentCode: '4S59-BE2025',
    date: 'Quarta, 23 de Abril',
    startTime: '8:31:17',
    duration: '1:35:42',
    professionalComments: 'Sem comentários',
    documentsAvailable: 2,
    payment: {
      value: 'R$ 50,90',
    },
    returnAvailable: true,
  };

  const handleViewDocuments = () => {
    navigation.navigate('AvailableDocuments');
  };

  const handleScheduleReturn = () => {
    navigation.navigate('ScheduleReturn');
  };

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
        <Text style={styles.headerTitle}>Atendimentos Concluído</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Informações do Médico */}
        <View style={styles.doctorCard}>
          <Image source={{ uri: appointmentData.doctor.avatar }} style={styles.doctorAvatar} />
          <View style={styles.doctorInfo}>
            <View style={styles.doctorNameContainer}>
              <Text style={styles.doctorName}>{appointmentData.doctor.name}</Text>
              <Icon name="checkmark-circle" size={16} color="#4CAF50" />
            </View>
            <View style={styles.doctorSpecialty}>
              <Icon name="medical" size={14} color="#666" />
              <Text style={styles.specialtyText}>{appointmentData.doctor.specialty}</Text>
            </View>
          </View>
          <View style={styles.returnAvailable}>
            <Text style={styles.returnText}>Retorno Disponível</Text>
            <View style={styles.returnDot} />
          </View>
        </View>

        {/* Tipo e Status */}
        <View style={styles.statusCard}>
          <Text style={styles.serviceType}>{appointmentData.type}</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{appointmentData.status}</Text>
          </View>
        </View>

        {/* Código do Atendimento */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Código do Atendimento</Text>
          <Text style={styles.infoValue}>{appointmentData.appointmentCode}</Text>
        </View>

        {/* Data do Atendimento */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Icon name="calendar" size={20} color="#4267F6" />
            <Text style={styles.infoTitle}>Data do Atendimento</Text>
          </View>
          <Text style={styles.infoValue}>{appointmentData.date}</Text>
        </View>

        {/* Horário e Duração */}
        <View style={styles.timeCard}>
          <View style={styles.timeSection}>
            <View style={styles.timeHeader}>
              <Icon name="time" size={20} color="#4267F6" />
              <Text style={styles.timeTitle}>Início do Atendimento</Text>
            </View>
            <Text style={styles.timeValue}>{appointmentData.startTime}</Text>
          </View>
          <View style={styles.timeSection}>
            <Text style={styles.timeTitle}>Duração</Text>
            <Text style={styles.timeValue}>{appointmentData.duration}</Text>
          </View>
        </View>

        {/* Comentários e Documentos */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Comentários do Profissional</Text>
          <Text style={styles.infoValue}>{appointmentData.professionalComments}</Text>
          <Text style={styles.documentsInfo}>
            Há {appointmentData.documentsAvailable} documentos disponíveis neste Atendimentos
          </Text>
          <TouchableOpacity style={styles.documentsButton} onPress={handleViewDocuments}>
            <Text style={styles.documentsButtonText}>Ver Documentos Disponíveis</Text>
          </TouchableOpacity>
        </View>

        {/* Pagamentos */}
        <View style={styles.infoCard}>
          <Text style={styles.paymentTitle}>Pagamentos</Text>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentLabel}>Valor do Atendimento</Text>
            <Text style={styles.paymentValue}>{appointmentData.payment.value}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão de Agendar Retorno */}
      <TouchableOpacity style={styles.returnButton} onPress={handleScheduleReturn}>
        <Text style={styles.returnButtonText}>Agendar Retorno</Text>
      </TouchableOpacity>
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
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  specialtyText: {
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
  statusCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  timeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  timeSection: {
    flex: 1,
    alignItems: 'center',
  },
  timeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  timeTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  documentsInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  documentsButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  documentsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
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
  returnButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CompletedAppointment;
