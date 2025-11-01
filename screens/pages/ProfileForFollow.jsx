import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { InicialText } from '../components/InicialText';
import { ProfileItem } from '../components/feedComponents/ProfileItem';
import { PROFILES } from '../data/profilesData';
import { useFeed } from '../components/FeedContext'; //Import do contexto

const ProfileForFollow = () => {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();
    const { setShowHomeFeed } = useFeed(); // função do contexto
    
    const filteredProfiles = PROFILES.filter(profile => 
        profile.name.toLowerCase().includes(searchText.toLowerCase()) ||
        profile.specialism.toLowerCase().includes(searchText.toLowerCase())
    );
    
    const renderItem = ({ item }) => (
        <ProfileItem
            name={item.name}
            specialism={item.specialism}
            image={item.image}
        />
    );

    const goToHomeFeed = () => {
        setShowHomeFeed(true); // <-- Ativa o HomeFeed no Feed.jsx
        navigation.navigate("MainTabs", { screen: "Início" }); // <-- Volta para aba Início
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <Ionicons name="search" size={50} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Busque por pessoas, assuntos e muito mais..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchText('')}>
                        <Ionicons name="close-circle" size={60} color="#888" style={styles.clearIcon} />
                    </TouchableOpacity>
                )}
            </View>
           
            <FlatList
                data={filteredProfiles}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={[styles.list, { paddingBottom: 100 }]}
                ListEmptyComponent={
                    <Text style={styles.placeholderText}>
                        Nenhum perfil encontrado
                    </Text>
                }
                ListFooterComponent={
                    <View style={styles.footerButtons}>
                        <TouchableOpacity 
                            style={styles.homeFeedButton}
                            onPress={goToHomeFeed}
                        >
                            <Text style={styles.homeFeedButtonText}>
                                Ir para HomeFeed
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[styles.homeFeedButton, { backgroundColor: '#14B8A6', marginTop: 12 }]}
                            onPress={() => navigation.navigate('UserProfileExample')}
                        >
                            <Text style={styles.homeFeedButtonText}>
                                Ver Exemplo de Interações
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
};

export default ProfileForFollow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    clearIcon: {
        marginLeft: 10,
    },
    placeholderText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#888',
        fontSize: 16,
    },
    list: {
        paddingBottom: 20,
    },
    footerButtons: {
        marginTop: 20,
    },
    homeFeedButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    homeFeedButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
