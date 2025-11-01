import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useProfileNavigation, extractUserData } from '../../utils/profileNavigation';

export const ProfileItem = ({ name, specialism, image }) => {
    const { navigateToProfile } = useProfileNavigation();
    const [isFollowing, setIsFollowing] = useState(false);

    // Função que será chamada quando o botão for pressionado.
    const handleFollowToggle = () => {
        // Inverte o valor de 'isFollowing' para 'true' ou 'false'.
        setIsFollowing(!isFollowing);
    };

    const handleProfilePress = () => {
        const userData = extractUserData({ name, specialism, image });
        navigateToProfile(userData);
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.profileInfo}>
                <TouchableOpacity onPress={handleProfilePress}>
                    <Image source={{ uri: image }} style={styles.profileImage} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={handleProfilePress}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.profileName}>{name}</Text>
                            <Image
                                source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-verified-badge-3788755-3165319.png' }}
                                style={styles.verifiedIcon}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileSpecialism}>{specialism}</Text>
                </View>
            </View>
            
            {/* O botão agora tem um evento onPress e estilos/textos condicionais */}
            <TouchableOpacity 
                onPress={handleFollowToggle}
                style={[
                    styles.followButton,
                    isFollowing ? styles.followingButton : null // Aplica um estilo diferente se estiver seguindo
                ]}
            >
                <Text style={styles.followButtonText}>
                    {isFollowing ? 'Seguindo' : 'Seguir'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    verifiedIcon: {
        width: 16,
        height: 16,
        marginLeft: 4,
    },
    profileSpecialism: {
        fontSize: 14,
        color: '#888',
    },
    followButton: {
        backgroundColor: '#007AFF', // Cor padrão do botão "Seguir"
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 12,
    },
    followingButton: {
        backgroundColor: '#003f82ff', // Cor para o botão "Seguindo"
    },
    followButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});   