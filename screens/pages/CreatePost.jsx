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

const CreatePost = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [privacy, setPrivacy] = useState('Apenas Seguidores');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  // Dados mockados para demonstração
  const mockImages = [
    { id: 1, uri: 'https://i.pravatar.cc/300?img=1', selected: false },
    { id: 2, uri: 'https://i.pravatar.cc/300?img=2', selected: false },
    { id: 3, uri: 'https://i.pravatar.cc/300?img=3', selected: false },
    { id: 4, uri: 'https://i.pravatar.cc/300?img=4', selected: false },
    { id: 5, uri: 'https://i.pravatar.cc/300?img=5', selected: false },
    { id: 6, uri: 'https://i.pravatar.cc/300?img=6', selected: false },
  ];

  const mockPeople = [
    { id: 1, name: 'Dra. Maria Glenda', avatar: 'https://i.pravatar.cc/150?img=7', verified: true },
    { id: 2, name: 'Jorge Zikenay', avatar: 'https://i.pravatar.cc/150?img=8', verified: false },
    { id: 3, name: 'Dr. Walter Alencar', avatar: 'https://i.pravatar.cc/150?img=9', verified: true },
    { id: 4, name: 'Luana Paiva', avatar: 'https://i.pravatar.cc/150?img=10', verified: false },
  ];

  const handleImageSelect = (imageId) => {
    const updatedImages = mockImages.map(img => 
      img.id === imageId ? { ...img, selected: !img.selected } : img
    );
    
    const selected = updatedImages.filter(img => img.selected);
    setSelectedImages(selected);
  };

  const handlePublish = async () => {
    if (!postText.trim() && selectedImages.length === 0) {
      Alert.alert('Erro', 'Adicione texto ou imagens para publicar');
      return;
    }

    setIsPublishing(true);
    
    // Simular publicação
    setTimeout(() => {
      setIsPublishing(false);
      Alert.alert('Sucesso', 'Post publicado com sucesso!', [
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

  const ImagePickerModal = () => (
    <Modal
      visible={showImagePicker}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowImagePicker(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Selecione Fotos ou Vídeos para publicar</Text>
            <TouchableOpacity onPress={() => setShowImagePicker(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={mockImages}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.imageGridItem}
                onPress={() => handleImageSelect(item.id)}
              >
                <Image source={{ uri: item.uri }} style={styles.gridImage} />
                {item.selected && (
                  <View style={styles.selectedBadge}>
                    <Text style={styles.selectedBadgeText}>
                      {selectedImages.findIndex(img => img.id === item.id) + 1}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
          
          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => setShowImagePicker(false)}
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
            <Text style={styles.modalTitle}>Adicionar pessoas a Publicação</Text>
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
          
          <Text style={styles.sectionTitle}>Adicionados</Text>
          <View style={styles.addedTags}>
            <View style={styles.tagChip}>
              <Text style={styles.tagText}>@dra.mariaglen</Text>
              <TouchableOpacity>
                <Icon name="close" size={16} color="#666" />
              </TouchableOpacity>
            </View>
            <View style={styles.tagChip}>
              <Text style={styles.tagText}>@jamilecorrea</Text>
              <TouchableOpacity>
                <Icon name="close" size={16} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
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
            Estamos carregando sua publicação. Isso pode levar alguns segundos.
          </Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.publishButton}
          onPress={handlePublish}
          disabled={isPublishing}
        >
          <Text style={styles.publishButtonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <ScrollView style={styles.content}>
        {/* Privacy Setting */}
        <TouchableOpacity 
          style={styles.privacyButton}
          onPress={() => setShowPrivacyModal(true)}
        >
          <Icon name="people" size={16} color="#666" />
          <Text style={styles.privacyText}>{privacy}</Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>

        {/* User Info and Text Input */}
        <View style={styles.postSection}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }} 
            style={styles.userAvatar} 
          />
          <TextInput
            style={styles.textInput}
            placeholder="No que você está pensando, Carlos?"
            placeholderTextColor="#999"
            value={postText}
            onChangeText={setPostText}
            multiline
            maxLength={2000}
          />
        </View>

        {/* Selected Images Preview */}
        {selectedImages.length > 0 && (
          <View style={styles.imagesPreview}>
            {selectedImages.map((image, index) => (
              <Image 
                key={image.id} 
                source={{ uri: image.uri }} 
                style={styles.previewImage} 
              />
            ))}
            <Text style={styles.imagesCount}>{selectedImages.length} fotos adicionadas</Text>
          </View>
        )}

        {/* Action Icons */}
        <View style={styles.actionIcons}>
          <TouchableOpacity style={styles.actionIcon}>
            <Icon name="camera" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionIcon, showImagePicker && styles.actionIconActive]}
            onPress={() => setShowImagePicker(true)}
          >
            <Icon name="images" size={24} color={showImagePicker ? "#4267F6" : "#666"} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionIcon}
            onPress={() => setShowTagModal(true)}
          >
            <Icon name="person-add" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionIcon}
            onPress={() => setShowLocationModal(true)}
          >
            <Icon name="location" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Character Count */}
        <Text style={styles.characterCount}>{postText.length}/2000</Text>
      </ScrollView>

      {/* Modals */}
      <PrivacyModal />
      <ImagePickerModal />
      <TagModal />
      <PublishingModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  publishButton: {
    backgroundColor: '#4267F6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  publishButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  privacyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  privacyText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
    marginLeft: 8,
  },
  postSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  imagesPreview: {
    marginBottom: 20,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  imagesCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIconActive: {
    backgroundColor: '#E3F2FD',
  },
  characterCount: {
    textAlign: 'right',
    color: '#999',
    fontSize: 14,
    marginBottom: 20,
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
  imageGridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 2,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  selectedBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
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
  addedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    color: '#4267F6',
    marginRight: 8,
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

export default CreatePost;
