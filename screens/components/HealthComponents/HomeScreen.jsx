import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import { healthStyles } from './HealthStyles';
import { 
  SearchIcon, 
  LocationIcon, 
  MicrophoneIcon, 
  HeartIcon, 
  UserIcon,
  CrownIcon,
  BurgerMenuIcon
} from './HealthIcons';
import StandardHeader from '../StandardHeader';
import { useProfileNavigation, extractUserData } from '../../utils/profileNavigation';

const HomeScreen = ({ onNavigate }) => {
  const [searchText, setSearchText] = useState('');
  const { navigateToProfile } = useProfileNavigation();

  // Dados mockados dos profissionais
  const professionals = [
    {
      id: 1,
      name: 'Dra. Maria Glendeswalter',
      specialty: 'Clínica Geral',
      rating: 4.8,
      reviews: 4876,
      price: 'R$ 109,90',
      services: ['Teleconsulta', 'Presencial'],
      appointments: '+5.000 Atendimentos',
      availability: 'Disponível Hoje, 28 de Abril',
      timeSlots: ['08:00', '08:30', '09:00'],
      image: 'https://i.pravatar.cc/150?img=3',
      featured: true,
      sponsored: true,
      location: null
    },
    {
      id: 2,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      rating: 4.7,
      reviews: 3200,
      price: 'R$ 199,90',
      services: ['Teleconsulta', 'Presencial'],
      appointments: '+3.200 Atendimentos',
      availability: 'Disponível Hoje, 28 de Abril',
      timeSlots: ['09:30', '10:00', '10:30'],
      image: 'https://i.pravatar.cc/150?img=4',
      featured: false,
      sponsored: false,
      location: 'Mangueirão, Belém - PA'
    },
    {
      id: 3,
      name: 'Dra. Maria Glenda',
      specialty: 'Clínica Geral',
      rating: 4.6,
      reviews: 2100,
      price: 'R$ 159,90',
      services: ['Teleconsulta', 'Presencial'],
      appointments: '+2.100 Atendimentos',
      availability: 'Disponível Hoje, 28 de Abril',
      timeSlots: ['11:00', '11:30', '12:00'],
      image: 'https://i.pravatar.cc/150?img=5',
      featured: false,
      sponsored: false,
      location: 'Centro, Belém - PA'
    }
  ];

  const handleProfessionalPress = (professional) => {
    const userData = extractUserData({
      name: professional.name,
      image: professional.image,
      specialty: professional.specialty,
      // Mapear dados específicos do profissional para o formato de usuário
      avatar: professional.image,
      username: professional.name.toLowerCase().replace(/\s+/g, '.'),
      isVerified: true,
      bio: `${professional.specialty} - ${professional.appointments} • Avaliação: ${professional.rating} estrelas`,
      stats: {
        publications: 0,
        followers: professional.reviews,
        following: 0
      }
    });
    navigateToProfile(userData);
  };

  const renderProfessional = ({ item }) => (
    <View style={healthStyles.professionalCard}>
      {item.featured && (
        <View style={healthStyles.featuredBanner}>
          <CrownIcon />
          <Text style={healthStyles.featuredText}>Profissional em Destaque</Text>
        </View>
      )}
      {item.sponsored && (
        <Text style={healthStyles.sponsoredText}>Patrocinado</Text>
      )}
      
      <View style={healthStyles.professionalHeader}>
        <TouchableOpacity onPress={() => handleProfessionalPress(item)}>
          <Image source={{ uri: item.image }} style={healthStyles.professionalImage} />
        </TouchableOpacity>
        <View style={healthStyles.professionalInfo}>
          <TouchableOpacity onPress={() => handleProfessionalPress(item)}>
            <View style={healthStyles.nameContainer}>
              <Text style={healthStyles.professionalName}>{item.name}</Text>
              <Text style={healthStyles.verifiedIcon}>✓</Text>
            </View>
          </TouchableOpacity>
          <Text style={healthStyles.professionalSpecialty}>{item.specialty}</Text>
          <View style={healthStyles.ratingContainer}>
            <Text style={healthStyles.starIcon}>⭐</Text>
            <Text style={healthStyles.ratingText}>{item.rating} {item.reviews.toLocaleString()} Avaliações</Text>
          </View>
        </View>
        <View style={healthStyles.priceContainer}>
          <Text style={healthStyles.priceLabel}>A partir de</Text>
          <Text style={healthStyles.priceValue}>{item.price}</Text>
        </View>
      </View>

      <View style={healthStyles.servicesContainer}>
        {item.services.map((service, index) => (
          <View key={index} style={[
            healthStyles.serviceTag,
            service === 'Teleconsulta' ? healthStyles.teleconsultTag : healthStyles.presentialTag
          ]}>
            <Text style={healthStyles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>

      <View style={healthStyles.appointmentsInfo}>
        <Text style={healthStyles.appointmentsText}>{item.appointments}</Text>
        <Text style={healthStyles.availabilityText}>{item.availability}</Text>
      </View>

      {item.location && (
        <View style={healthStyles.locationContainer}>
          <LocationIcon />
          <Text style={healthStyles.locationText}>{item.location}</Text>
        </View>
      )}

      <View style={healthStyles.timeSlotsContainer}>
        {item.timeSlots.map((time, index) => (
          <TouchableOpacity key={index} style={healthStyles.timeSlot}>
            <Text style={healthStyles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={healthStyles.seeMoreButton}>
          <Text style={healthStyles.seeMoreText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={healthStyles.container}>
      {/* Header Principal */}
      <StandardHeader title="Minha Saúde" showBackButton={false} showProfileImage={true} />
      
      <ScrollView style={healthStyles.scrollContainer}>
        {/* Botões de Navegação Principais */}
        <View style={healthStyles.navigationButtons}>
          <TouchableOpacity 
            style={healthStyles.navButton}
            onPress={() => onNavigate('health-info')}
          >
            <View style={healthStyles.navButtonContent}>
              <Text style={healthStyles.navButtonText}>Informações de Saúde</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={healthStyles.navButton}
            onPress={() => onNavigate('appointments')}
          >
            <View style={healthStyles.navButtonContent}>
              <Text style={healthStyles.navButtonText}>Meus Agendamentos</Text>
      
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={healthStyles.navButton}
            onPress={() => onNavigate('exam-results')}
          >
            <View style={healthStyles.navButtonContent}>
              <Text style={healthStyles.navButtonText}>Resultados de Exames</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Seção de Busca */}
        <View style={healthStyles.searchSection}>
          <Text style={healthStyles.sectionTitle}>Buscar Atendimentos</Text>
          <View style={healthStyles.searchContainer}>
            <TouchableOpacity style={healthStyles.locationSelector}>
              <LocationIcon />
              <Text style={healthStyles.locationText}>Belém - PA</Text>
              <Text style={healthStyles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <View style={healthStyles.c}>
              <SearchIcon />
              <TextInput
                style={healthStyles.searchInput}
                placeholder="Busque por especialidad..."
                value={searchText}
                onChangeText={setSearchText}
              />
              <TouchableOpacity style={healthStyles.microphoneButton}>
                <MicrophoneIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Botões de Ação Rápida */}
        <View style={healthStyles.quickActions}>
          <TouchableOpacity 
            style={[healthStyles.quickActionButton, healthStyles.consultationsButton]}
            onPress={() => onNavigate('doctors')}
          >
            <HeartIcon />
            <Text style={healthStyles.quickActionText}>Consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[healthStyles.quickActionButton, healthStyles.examsButton]}
            onPress={() => onNavigate('exams')}
          >
            <UserIcon />
            <Text style={healthStyles.quickActionText}>Exames</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[healthStyles.quickActionButton, healthStyles.caregiversButton]}
            onPress={() => onNavigate('caregivers')}
          >
            <LocationIcon />
            <Text style={healthStyles.quickActionText}>Cuidadores</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Profissionais */}
        <View style={healthStyles.professionalsSection}>
          <FlatList
            data={professionals}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderProfessional}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
