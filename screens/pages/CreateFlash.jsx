import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Ícones
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CreateFlash = () => {
  const navigation = useNavigation();
  const [flashText, setFlashText] = useState('');
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [privacy, setPrivacy] = useState('Apenas Seguidores');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [currentStep, setCurrentStep] = useState('text'); // 'text', 'media', 'publish'

  // Dados mockados para demonstração
  const mockMedia = [
    { id: 1, uri: 'https://i.pravatar.cc/300?img=1', type: 'image', duration: null },
    { id: 2, uri: 'https://i.pravatar.cc/300?img=2', type: 'video', duration: '0:34' },
    { id: 3, uri: 'https://i.pravatar.cc/300?img=3', type: 'image', duration: null },
    { id: 4, uri: 'https://i.pravatar.cc/300?img=4', type: 'video', duration: '1:45' },
    { id: 5, uri: 'https://i.pravatar.cc/300?img=5', type: 'image', duration: null },
    { id: 6, uri: 'https://i.pravatar.cc/300?img=6', type: 'video', duration: '2:12' },
  ];

  const mockPeople = [
    { id: 1, name: 'Dra. Maria Glenda', avatar: 'https://i.pravatar.cc/150?img=7', verified: true },
    { id: 2, name: 'Jorge Zikenay', avatar: 'https://i.pravatar.cc/150?img=8', verified: false },
    { id: 3, name: 'Dr. Walter Alencar', avatar: 'https://i.pravatar.cc/150?img=9', verified: true },
    { id: 4, name: 'Luana Paiva', avatar: 'https://i.pravatar.cc/150?img=10', verified: false },
  ];

  const mockLocations = [
    { id: 1, name: 'Q.A', address: 'Mangueirão, Belém - Pará, Brasil' },
    { id: 2, name: 'Hospital Universitário', address: 'Belém - Pará, Brasil' },
    { id: 3, name: 'Clínica Isaude', address: 'Centro, Belém - Pará, Brasil' },
  ];

  const handleMediaSelect = (mediaId) => {
    const updatedMedia = mockMedia.map(media => 
      media.id === mediaId ? { ...media, selected: !media.selected } : media
    );
    
    const selected = updatedMedia.filter(media => media.selected);
    setSelectedMedia(selected);
  };

  const handleNext = () => {
    if (currentStep === 'text') {
      if (!flashText.trim()) {
        Alert.alert('Erro', 'Adicione um texto para continuar');
        return;
      }
      setCurrentStep('media');
    } else if (currentStep === 'media') {
      setCurrentStep('publish');
    }
  };

  const handleBack = () => {
    if (currentStep === 'media') {
      setCurrentStep('text');
    } else if (currentStep === 'publish') {
      setCurrentStep('media');
    }
  };

  const handlePublish = async () => {
    if (!flashText.trim() && selectedMedia.length === 0) {
      Alert.alert('Erro', 'Adicione texto ou mídia para publicar');
      return;
    }

    setIsPublishing(true);
    
    // Simular publicação
    setTimeout(() => {
      setIsPublishing(false);
      Alert.alert('Sucesso', 'Flash publicado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }, 2000);
  };

  const PrivacyModal = () => (
    <Modal
      visible={showPrivacyModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowPrivacyModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Quem pode ver?</Text>
            <TouchableOpacity onPress={() => setShowPrivacyModal(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.privacyOption}
            onPress={() => {
              setPrivacy('Público');
              setShowPrivacyModal(false);
            }}
          >
            <Icon name="globe" size={20} color="#000" />
            <Text style={styles.privacyOptionText}>Público</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.privacyOption}
            onPress={() => {
              setPrivacy('Apenas Seguidores');
              setShowPrivacyModal(false);
            }}
          >
            <Icon name="people" size={20} color="#000" />
            <Text style={styles.privacyOptionText}>Apenas Seguidores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const MediaPickerModal = () => (
    <Modal
      visible={showMediaPicker}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowMediaPicker(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Selecione Fotos ou Vídeos</Text>
            <TouchableOpacity onPress={() => setShowMediaPicker(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={mockMedia}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.mediaGridItem}
                onPress={() => handleMediaSelect(item.id)}
              >
                <Image source={{ uri: item.uri }} style={styles.gridMedia} />
                {item.duration && (
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{item.duration}</Text>
                  </View>
                )}
                {item.selected && (
                  <View style={styles.selectedBadge}>
                    <Text style={styles.selectedBadgeText}>
                      {selectedMedia.findIndex(media => media.id === item.id) + 1}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
          
          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => setShowMediaPicker(false)}
          >
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const TagModal = () => (
    <Modal
      visible={showTagModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowTagModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Adicionar pessoas</Text>
            <TouchableOpacity onPress={() => setShowTagModal(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar pessoas"
            placeholderTextColor="#999"
          />
          
          <Text style={styles.sectionTitle}>Sugeridos</Text>
          {mockPeople.map(person => (
            <TouchableOpacity key={person.id} style={styles.personItem}>
              <Image source={{ uri: person.avatar }} style={styles.personAvatar} />
              <Text style={styles.personName}>{person.name}</Text>
              {person.verified && (
                <Icon name="checkmark-circle" size={20} color="#4CAF50" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  const LocationModal = () => (
    <Modal
      visible={showLocationModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowLocationModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Adicionar Local</Text>
            <TouchableOpacity onPress={() => setShowLocationModal(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar locais para adicionar"
            placeholderTextColor="#999"
          />
          
          {mockLocations.map(location => (
            <TouchableOpacity key={location.id} style={styles.locationItem}>
              <Icon name="location" size={20} color="#666" />
              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationAddress}>{location.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  const PublishingModal = () => (
    <Modal
      visible={isPublishing}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.publishingModal}>
          <Text style={styles.publishingTitle}>Publicando...</Text>
          <Text style={styles.publishingSubtitle}>
            Estamos carregando seu flash. Isso pode levar alguns segundos.
          </Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderTextStep = () => (
    <View style={styles.textStep}>
      <TextInput
        style={styles.flashTextInput}
        placeholder="Olha eu Publicando um Texto aqui!"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={flashText}
        onChangeText={setFlashText}
        multiline
        maxLength={2000}
        textAlignVertical="top"
      />
      <Text style={styles.characterCount}>{flashText.length}/2000</Text>
    </View>
  );

  const renderMediaStep = () => (
    <View style={styles.mediaStep}>
      <Text style={styles.mediaStepTitle}>Selecione Fotos ou Vídeos</Text>
      <FlatList
        data={mockMedia}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.mediaGridItem}
            onPress={() => handleMediaSelect(item.id)}
          >
            <Image source={{ uri: item.uri }} style={styles.gridMedia} />
            {item.duration && (
              <View style={styles.durationBadge}>
                <Text style={styles.durationText}>{item.duration}</Text>
              </View>
            )}
            {item.selected && (
              <View style={styles.selectedBadge}>
                <Text style={styles.selectedBadgeText}>
                  {selectedMedia.findIndex(media => media.id === item.id) + 1}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );

  const renderPublishStep = () => (
    <View style={styles.publishStep}>
      {/* Preview do flash */}
      <View style={styles.flashPreview}>
        <Text style={styles.flashPreviewText}>{flashText}</Text>
        {selectedMedia.length > 0 && (
          <View style={styles.mediaPreview}>
            {selectedMedia.slice(0, 2).map((media, index) => (
              <View key={media.id} style={styles.previewMediaItem}>
                <Image source={{ uri: media.uri }} style={styles.previewMedia} />
                {media.duration && (
                  <View style={styles.previewDurationBadge}>
                    <Text style={styles.previewDurationText}>{media.duration}</Text>
                  </View>
                )}
                {index === 1 && (
                  <TouchableOpacity style={styles.editCoverButton}>
                    <Text style={styles.editCoverText}>Editar Capa</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Configurações finais */}
      <View style={styles.finalSettings}>
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => setShowPrivacyModal(true)}
        >
          <Icon name="people" size={16} color="#666" />
          <Text style={styles.settingText}>{privacy}</Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => setShowTagModal(true)}
        >
          <Icon name="person-add" size={16} color="#666" />
          <Text style={styles.settingText}>Com outras 2 pessoas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => setShowLocationModal(true)}
        >
          <Icon name="location" size={16} color="#666" />
          <Text style={styles.settingText}>Academia FitHarmony</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4267F6" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Criar Flash</Text>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={handleNext}
          disabled={currentStep === 'publish'}
        >
          <Text style={styles.nextButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {currentStep === 'text' && renderTextStep()}
        {currentStep === 'media' && renderMediaStep()}
        {currentStep === 'publish' && renderPublishStep()}
      </View>

      {/* Bottom Action Bar */}
      {currentStep === 'publish' && (
        <View style={styles.bottomActionBar}>
          <View style={styles.actionIcons}>
            <TouchableOpacity style={styles.actionIcon}>
              <Icon name="person-add" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon}>
              <Icon name="images" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon}>
              <Text style={styles.textIcon}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon}>
              <Icon name="location" size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.publishButton}
            onPress={handlePublish}
            disabled={isPublishing}
          >
            <Text style={styles.publishButtonText}>Publicar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modals */}
      <PrivacyModal />
      <MediaPickerModal />
      <TagModal />
      <LocationModal />
      <PublishingModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4267F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  nextButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  nextButtonText: {
    color: '#4267F6',
    fontWeight: '600',
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textStep: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashTextInput: {
    width: '100%',
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    minHeight: 200,
    textAlignVertical: 'top',
  },
  characterCount: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginTop: 20,
  },
  mediaStep: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  mediaStepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediaGridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 2,
  },
  gridMedia: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  durationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '600',
  },
  selectedBadge: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4267F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  publishStep: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  flashPreview: {
    marginBottom: 30,
  },
  flashPreviewText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediaPreview: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  previewMediaItem: {
    position: 'relative',
  },
  previewMedia: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  previewDurationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  previewDurationText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '600',
  },
  editCoverButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  editCoverText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '600',
  },
  finalSettings: {
    gap: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  settingText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  bottomActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  publishButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  publishButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  privacyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  privacyOptionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  confirmButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  personAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  personName: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginLeft: 15,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 15,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  locationAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  publishingModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  publishingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  publishingSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4267F6',
    width: '60%',
  },
});

export default CreateFlash;
