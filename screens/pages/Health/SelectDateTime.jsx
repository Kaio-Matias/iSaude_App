import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectDateTime = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(28);
  const [selectedTime, setSelectedTime] = useState('08:30');
  const [currentMonth, setCurrentMonth] = useState('Abril, 2025');

  const availableDates = [28, 29, 30];
  const availableTimes = ['08:30', '09:00', '10:00', '10:30', '16:00'];
  const unavailableTimes = ['08:00', '09:30', '11:00', '11:30', '15:00', '15:30', '16:30', '17:00', '17:30'];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmAppointment = () => {
    // Aqui você pode implementar a lógica para confirmar o agendamento
    console.log('Agendamento confirmado:', { date: selectedDate, time: selectedTime });
    navigation.navigate('AppointmentConfirmed');
  };

  const renderCalendarDay = (day, isAvailable = false, isSelected = false) => (
    <TouchableOpacity
      key={day}
      style={[
        styles.calendarDay,
        isAvailable && styles.availableDay,
        isSelected && styles.selectedDay,
      ]}
      onPress={() => isAvailable && handleDateSelect(day)}
      disabled={!isAvailable}
    >
      <Text style={[
        styles.calendarDayText,
        isAvailable && styles.availableDayText,
        isSelected && styles.selectedDayText,
      ]}>
        {day}
      </Text>
    </TouchableOpacity>
  );

  const renderTimeSlot = (time, isAvailable = false, isSelected = false) => (
    <TouchableOpacity
      key={time}
      style={[
        styles.timeSlot,
        isAvailable && styles.availableTimeSlot,
        isSelected && styles.selectedTimeSlot,
      ]}
      onPress={() => isAvailable && handleTimeSelect(time)}
      disabled={!isAvailable}
    >
      <Text style={[
        styles.timeSlotText,
        isAvailable && styles.availableTimeSlotText,
        isSelected && styles.selectedTimeSlotText,
      ]}>
        {time}
      </Text>
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
        <Text style={styles.headerTitle}>Selecione o Horário</Text>
        <TouchableOpacity style={styles.forwardButton}>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Calendário */}
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity style={styles.monthNavButton}>
              <Icon name="chevron-back" size={20} color="#666" />
            </TouchableOpacity>
            <Text style={styles.monthTitle}>{currentMonth}</Text>
            <TouchableOpacity style={styles.monthNavButton}>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Dias da Semana */}
          <View style={styles.weekDaysContainer}>
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
              <Text key={day} style={styles.weekDayText}>{day}</Text>
            ))}
          </View>

          {/* Dias do Mês */}
          <View style={styles.calendarGrid}>
            {/* Primeira semana */}
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <View key={day} style={styles.calendarDay}>
                <Text style={styles.calendarDayText}>{day}</Text>
              </View>
            ))}
            
            {/* Segunda semana */}
            {[8, 9, 10, 11, 12, 13, 14].map((day) => (
              <View key={day} style={styles.calendarDay}>
                <Text style={styles.calendarDayText}>{day}</Text>
              </View>
            ))}
            
            {/* Terceira semana */}
            {[15, 16, 17, 18, 19, 20, 21].map((day) => (
              <View key={day} style={styles.calendarDay}>
                <Text style={styles.calendarDayText}>{day}</Text>
              </View>
            ))}
            
            {/* Quarta semana */}
            {[22, 23, 24, 25, 26, 27, 28].map((day) => {
              if (day === 25) {
                return (
                  <View key={day} style={styles.currentDay}>
                    <Text style={styles.currentDayText}>{day}</Text>
                  </View>
                );
              } else if (availableDates.includes(day)) {
                return renderCalendarDay(day, true, day === selectedDate);
              } else {
                return (
                  <View key={day} style={styles.calendarDay}>
                    <Text style={styles.calendarDayText}>{day}</Text>
                  </View>
                );
              }
            })}
            
            {/* Quinta semana */}
            {[29, 30, 31].map((day) => {
              if (availableDates.includes(day)) {
                return renderCalendarDay(day, true, day === selectedDate);
              } else {
                return (
                  <View key={day} style={styles.calendarDay}>
                    <Text style={styles.calendarDayText}>{day}</Text>
                  </View>
                );
              }
            })}
          </View>

          {/* Horários Disponíveis */}
          <View style={styles.timesSection}>
            <View style={styles.timesHeader}>
              <Text style={styles.timesTitle}>Horários Disponíveis</Text>
              <Text style={styles.selectedDateText}>
                Segunda, {selectedDate} de Abril
              </Text>
            </View>

            <View style={styles.timesGrid}>
              {/* Horários não disponíveis */}
              {unavailableTimes.map((time) => renderTimeSlot(time, false))}
              
              {/* Horários disponíveis */}
              {availableTimes.map((time) => renderTimeSlot(time, true, time === selectedTime))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão de Confirmar */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmAppointment}>
        <Text style={styles.confirmButtonText}>Confirmar Agendamento</Text>
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
  },
  forwardButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthNavButton: {
    padding: 5,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarDayText: {
    fontSize: 16,
    color: '#CCC',
  },
  currentDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
  },
  currentDayText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  availableDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4267F6',
    borderRadius: 20,
  },
  availableDayText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  selectedDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    borderRadius: 20,
  },
  selectedDayText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  timesSection: {
    marginTop: 20,
  },
  timesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  timesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  selectedDateText: {
    fontSize: 14,
    color: '#666',
  },
  timesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    minWidth: 70,
    alignItems: 'center',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#CCC',
  },
  availableTimeSlot: {
    backgroundColor: '#E3F2FD',
  },
  availableTimeSlotText: {
    color: '#4267F6',
    fontWeight: '500',
  },
  selectedTimeSlot: {
    backgroundColor: '#4267F6',
  },
  selectedTimeSlotText: {
    color: '#FFF',
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SelectDateTime;
