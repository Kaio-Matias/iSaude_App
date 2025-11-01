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
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppointmentDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { appointment } = route.params || {};

  const [reminderEnabled, setReminderEnabled] = useState(true);

  const appointmentData = {
    doctor: {
      name: 'Dra. Maria Glenda',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isVerified: true,
      specialty: 'Clínico Geral',
    },
    type: 'Teleconsulta',
    date: 'Segunda, 28 de Abril às 8:30',
    roomCode: '4559-BE2025',
    preConsultationQuestions: true,
    payment: {
      value: 'R$ 50,90',
      method: 'Cartão de Crédito',
      cardNumber: '**** **** **** 4567',
      cardType: 'Cartão Inter',
    },
  };

  const handleCopyRoomCode = () => {
    // Aqui você pode implementar a cópia para clipboard
    console.log('Código copiado:', appointmentData.roomCode);
    Alert.alert('Sucesso', 'Código da sala copiado!');
  };

  const handlePreConsultationQuestions = () => {
    navigation.navigate('PreConsultationQuestions');
  };

  const handleEnterRoom = () => {
    navigation.navigate('AppointmentRoom');
  };

  const toggleReminder = () => {
    setReminderEnabled(!reminderEnabled);
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
        <Text style={styles.headerTitle}>Atendimento Agendado</Text>
        <View style={styles.headerRight}>
          <View style={styles.startsInBadge}>
            <Text style={styles.startsInText}>Inicia em 3 min</Text>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
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
            <Text style={styles.doctorSpecialty}>{appointmentData.doctor.specialty}</Text>
          </View>
          <View style={styles.appointmentType}>
            <Text style={styles.appointmentTypeText}>{appointmentData.type}</Text>
          </View>
        </View>

        {/* Data do Atendimento */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Icon name="calendar" size={20} color="#4267F6" />
            <Text style={styles.infoTitle}>Data do Atendimento</Text>
          </View>
          <Text style={styles.infoValue}>{appointmentData.date}</Text>
          <TouchableOpacity style={styles.reminderContainer} onPress={toggleReminder}>
            <Icon 
              name={reminderEnabled ? "checkmark-circle" : "ellipse-outline"} 
              size={20} 
              color={reminderEnabled ? "#4CAF50" : "#666"} 
            />
            <Text style={styles.reminderText}>Lembrar 15 minutos antes</Text>
          </TouchableOpacity>
        </View>

        {/* Código da Sala */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Icon name="key" size={20} color="#4267F6" />
            <Text style={styles.infoTitle}>Código da Sala</Text>
          </View>
          <View style={styles.roomCodeContainer}>
            <Text style={styles.roomCode}>{appointmentData.roomCode}</Text>
            <TouchableOpacity style={styles.copyButton} onPress={handleCopyRoomCode}>
              <Icon name="copy" size={20} color="#4267F6" />
            </TouchableOpacity>
          </View>
          <Text style={styles.roomInfo}>
            A sala estará disponível 10 minutos antes do início do atendimento.
          </Text>
        </View>

        {/* Perguntas Pré-Consulta */}
        {appointmentData.preConsultationQuestions && (
          <View style={styles.infoCard}>
            <Text style={styles.preConsultationText}>
              A profissional enviou perguntas Pré Consulta para você
            </Text>
            <TouchableOpacity 
              style={styles.preConsultationButton}
              onPress={handlePreConsultationQuestions}
            >
              <Text style={styles.preConsultationButtonText}>
                Responder Perguntas Pré Consulta
              </Text>
            </TouchableOpacity>
            <View style={styles.userAvatarContainer}>
              <Image 
                source={{ uri: 'https://i.pravatar.cc/150?img=12' }} 
                style={styles.userAvatar} 
              />
            </View>
          </View>
        )}

        {/* Pagamentos */}
        <View style={styles.infoCard}>
          <Text style={styles.paymentTitle}>Pagamentos</Text>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentLabel}>Valor do Atendimento</Text>
            <Text style={styles.paymentValue}>{appointmentData.payment.value}</Text>
          </View>
          <View style={styles.paymentMethod}>
            <Text style={styles.paymentLabel}>Método de Pagamento</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>{appointmentData.payment.method}</Text>
              <Text style={styles.cardNumber}>{appointmentData.payment.cardNumber}</Text>
              <Text style={styles.cardType}>{appointmentData.payment.cardType}</Text>
            </View>
            <View style={styles.cardLogo}>
              <Text style={styles.mastercardText}>Mastercard</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão de Entrar na Sala */}
      <TouchableOpacity style={styles.enterRoomButton} onPress={handleEnterRoom}>
        <Text style={styles.enterRoomText}>Entrar na Sala de Atendimento</Text>
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  startsInBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  startsInText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
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
    fontSize: 14,
    color: '#666',
  },
  appointmentType: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  appointmentTypeText: {
    color: '#4267F6',
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
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  reminderText: {
    fontSize: 14,
    color: '#666',
  },
  roomCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  roomCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4267F6',
  },
  copyButton: {
    padding: 5,
  },
  roomInfo: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  preConsultationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  preConsultationButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  preConsultationButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  userAvatarContainer: {
    alignItems: 'flex-end',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  cardInfo: {
    flex: 1,
  },
  cardText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 2,
  },
  cardNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  cardType: {
    fontSize: 14,
    color: '#666',
  },
  cardLogo: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  mastercardText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  enterRoomButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  enterRoomText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppointmentDetails;
