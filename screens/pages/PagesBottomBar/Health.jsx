import React, { useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../../components/HealthComponents/HomeScreen';
import DoctorsScreen from '../../components/HealthComponents/DoctorsScreen';
import AppointmentQuestion from '../../components/HealthComponents/AppointmentQuestion';
import AppointmentDetails from '../../components/HealthComponents/AppointmentDetails';
import CalendarScreen from '../../components/HealthComponents/CalendarScreen';
import AppointmentConfirmed from '../../components/HealthComponents/AppointmentConfirmed';
import AppointmentsScreen from '../../components/HealthComponents/AppointmentsScreen';
import MedicalRecordsScreen from '../../components/HealthComponents/MedicalRecordsScreen';
import PlaceholderScreen from '../../components/HealthComponents/PlaceholderScreen';

export const Health = () => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'doctors':
        return <DoctorsScreen onNavigate={setCurrentScreen} />;
      case 'appointment-question':
        return <AppointmentQuestion onNavigate={setCurrentScreen} />;
      case 'appointment-details':
        return <AppointmentDetails onNavigate={setCurrentScreen} />;
      case 'calendar':
        return <CalendarScreen onNavigate={setCurrentScreen} />;
      case 'appointment-confirmed':
        return <AppointmentConfirmed onNavigate={setCurrentScreen} />;
      case 'appointments':
        return <AppointmentsScreen onNavigate={setCurrentScreen} />;
      case 'records':
        return <MedicalRecordsScreen onNavigate={setCurrentScreen} />;
      case 'health-info':
        navigation.navigate('HealthInfo');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'exam-results':
        navigation.navigate('ExamResults');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'exams':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Exames" 
          description="Agende e acompanhe seus exames médicos."
        />;
      case 'caregivers':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Cuidadores" 
          description="Encontre e contrate cuidadores profissionais."
        />;
      case 'search-appointments':
        navigation.navigate('SearchAppointments');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'specialty-doctors':
        navigation.navigate('SpecialtyDoctors');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'location-selector':
        navigation.navigate('LocationSelector');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'service-history':
        navigation.navigate('ServiceHistory');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'completed-appointment':
        navigation.navigate('CompletedAppointment');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'appointment-options':
        navigation.navigate('AppointmentOptions');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'schedule-return':
        navigation.navigate('ScheduleReturn');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'prescriptions':
        navigation.navigate('Prescriptions');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'upload-exam':
        navigation.navigate('UploadExam');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'pre-consultation-questions':
        navigation.navigate('PreConsultationQuestions');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'select-date-time':
        navigation.navigate('SelectDateTime');
        return <HomeScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderCurrentScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});