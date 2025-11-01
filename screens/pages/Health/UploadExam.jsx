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

const UploadExam = () => {
  const navigation = useNavigation();
  const [attachedFiles, setAttachedFiles] = useState([
    { id: 1, name: 'resultado2.pdf' },
    { id: 2, name: 'resultado1.pdf' },
  ]);

  const handleRemoveFile = (fileId) => {
    setAttachedFiles(attachedFiles.filter(file => file.id !== fileId));
  };

  const handleAddNewDocument = () => {
    // Aqui você pode implementar a lógica para adicionar novos documentos
    const newFile = {
      id: Date.now(),
      name: `novo_documento_${attachedFiles.length + 1}.pdf`,
    };
    setAttachedFiles([...attachedFiles, newFile]);
  };

  const handleConclude = () => {
    // Aqui você pode implementar a lógica para finalizar o upload
    console.log('Upload concluído:', attachedFiles);
    navigation.goBack();
  };

  const renderAttachedFile = (file) => (
    <View key={file.id} style={styles.fileItem}>
      <Icon name="document" size={20} color="#4267F6" />
      <Text style={styles.fileName}>{file.name}</Text>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => handleRemoveFile(file.id)}
      >
        <Icon name="close" size={16} color="#FF3B30" />
      </TouchableOpacity>
    </View>
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
        <Text style={styles.headerTitle}>Anexar Resultado de Exames</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Arquivos Anexados */}
        <View style={styles.filesSection}>
          <Text style={styles.sectionTitle}>Arquivos Anexados</Text>
          {attachedFiles.map(renderAttachedFile)}
        </View>

        {/* Botão de Novo Documento */}
        <TouchableOpacity style={styles.addDocumentButton} onPress={handleAddNewDocument}>
          <Icon name="add" size={20} color="#4267F6" />
          <Text style={styles.addDocumentText}>Novo Documento</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botão de Concluir */}
      <TouchableOpacity style={styles.concludeButton} onPress={handleConclude}>
        <Text style={styles.concludeButtonText}>Concluir</Text>
      </TouchableOpacity>
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
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  filesSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  removeButton: {
    padding: 5,
  },
  addDocumentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3F2FD',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 10,
  },
  addDocumentText: {
    color: '#4267F6',
    fontSize: 16,
    fontWeight: '600',
  },
  concludeButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  concludeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default UploadExam;
