import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';

const CalendarScreen = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState('25');
  const [selectedTime, setSelectedTime] = useState('10:30');

  return (
    <View style={healthStyles.container}>
      <StandardHeader 
        title="Agendamento" 
        onBackPress={() => onNavigate('appointment-details')}
        showProfileImage={true}
      />

      <ScrollView style={healthStyles.calendarContainer}>
        {/* Calendário simplificado */}
        <View style={healthStyles.calendar}>
          <Text style={healthStyles.calendarTitle}>Dezembro 2024</Text>
          <View style={healthStyles.calendarGrid}>
            {[23, 24, 25, 26, 27, 28, 29].map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  healthStyles.calendarDay,
                  selectedDate === day.toString() && healthStyles.selectedDay
                ]}
                onPress={() => setSelectedDate(day.toString())}
              >
                <Text style={[
                  healthStyles.calendarDayText,
                  selectedDate === day.toString() && healthStyles.selectedDayText
                ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Horários */}
        <View style={healthStyles.timeContainer}>
          <Text style={healthStyles.timeTitle}>Horários Disponíveis</Text>
          <View style={healthStyles.timeGrid}>
            {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  healthStyles.timeSlot,
                  selectedTime === time && healthStyles.selectedTimeSlot
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  healthStyles.timeText,
                  selectedTime === time && healthStyles.selectedDayText
                ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={healthStyles.continueButton}
          onPress={() => onNavigate('appointment-confirmed')}
        >
          <Text style={healthStyles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;

