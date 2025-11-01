import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { healthStyles } from './HealthStyles';
import StandardHeader from '../StandardHeader';
import { useNavigation } from '@react-navigation/native';

const PlaceholderScreen = ({ onNavigate, title, description, showBackButton = true }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <StandardHeader 
        title={title} 
        onBackPress={handleBackPress}
        showProfileImage={true}
      />

      <View style={styles.content}>
        <Text style={styles.placeholderText}>{description}</Text>
        <Text style={styles.comingSoonText}>Em breve...</Text>
        
        {showBackButton && (
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={handleBackPress}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4576F2',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#4576F2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlaceholderScreen;

