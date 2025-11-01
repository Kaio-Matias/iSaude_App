import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Accessibility = () => {
  const navigation = useNavigation();

  const accessibilityOptions = [
    { id: 'saturation', name: 'Saturação', icon: 'color-palette', screen: 'SaturationSettings' },
    { id: 'colorblind', name: 'Filtro Daltônico', icon: 'eye', screen: 'ColorblindFilter' },
    { id: 'zoom', name: 'Zoom', icon: 'search', screen: 'ZoomSettings' },
    { id: 'dyslexia', name: 'Dislexia', icon: 'library', screen: 'DyslexiaSettings' },
    { id: 'animations', name: 'Pausar animações', icon: 'pause', screen: 'AnimationSettings' },
    { id: 'talkback', name: 'Talkback', icon: 'chatbubble', screen: 'TalkbackSettings' },
  ];

  const handleOptionPress = (option) => {
    navigation.navigate(option.screen);
  };

  const renderOptionField = (icon, label, isEditable = true) => (
    <TouchableOpacity
      style={styles.infoField}
      onPress={() => isEditable && handleOptionPress({ screen: label })}
    >
      <View style={styles.fieldLeft}>
        <Icon name={icon} size={20} color="#4267F6" />
        <View style={styles.fieldContent}>
          <Text style={styles.fieldLabel}>{label}</Text>
        </View>
      </View>
      {isEditable && (
        <Icon name="chevron-forward" size={20} color="#C7C7CC" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Acessibilidade</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Card principal */}
        <View style={styles.mainCard}>
          {accessibilityOptions.map((option) => (
            <View key={option.id} style={styles.infoField}>
              <View style={styles.fieldLeft}>
                <Icon name={option.icon} size={20} color="#4267F6" />
                <View style={styles.fieldContent}>
                  <Text style={styles.fieldLabel}>{option.name}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleOptionPress(option)}>
                <Icon name="chevron-forward" size={20} color="#C7C7CC" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fieldContent: {
    marginLeft: 15,
    flex: 1,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
});

export default Accessibility;


