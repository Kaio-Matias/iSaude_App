import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

// Ícones SVG
import HeartIcon from '../../../assets/pulsesIcons/Curtido.svg';
import HeartActiveIcon from '../../../assets/pulsesIcons/CurtidoActive.svg';
import CommentIcon from '../../../assets/pulsesIcons/COMENTÁRIOS.svg';
import ShareIcon from '../../../assets/pulsesIcons/COMPARTILHAMENTOS.svg';
import FollowIcon from '../../../assets/pulsesIcons/SeguirBottom.svg';
import MusicIcon from '../../../assets/pulsesIcons/MusicName.svg';
import PeopleIcon from '../../../assets/pulsesIcons/PeopleVideo.svg';

const { width, height } = Dimensions.get('window');

const PulseVideo = ({ pulse }) => {
  const [isLiked, setIsLiked] = useState(pulse.isLiked);
  const [likesCount, setLikesCount] = useState(pulse.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <View style={styles.container}>
      {/* Fundo */}
      <Image
        source={{ uri: pulse.videoUrl || pulse.imageUrl }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Overlay inferior */}
      <View style={styles.overlay} />

      {/* Conteúdo principal */}
      <View style={styles.content}>
        {/* Autor */}
        <View style={styles.authorSection}>
          <Image source={{ uri: pulse.author.avatar }} style={styles.authorAvatar} />
          <Text style={styles.authorName}>{pulse.author.name}</Text>

          <TouchableOpacity style={styles.followButton}>
            <FollowIcon width={70} height={70} />
          </TouchableOpacity>
        </View>

        {/* Legenda */}
        <View style={styles.captionSection}>
          <Text style={styles.caption}>🧠 {pulse.caption}</Text>
          {pulse.caption.length > 50 && (
            <TouchableOpacity>
              <Text style={styles.seeMore}>Ver mais</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Curtidas */}
        <View style={styles.engagementSection}>
          <View style={styles.iconTextRow}>
            <HeartActiveIcon width={30} height={30} />
            <View style={styles.likesAvatars}>
              {pulse.likedBy.slice(0, 2).map((user, idx) => (
                <Image key={idx} source={{ uri: user?.avatar }} style={styles.likedAvatar} />
              ))}
            </View>
            <Text style={styles.likesText}>
              @{pulse.likedBy[0]?.username} e outras {formatNumber(likesCount)} pessoas
            </Text>
          </View>
        </View>

        {/* Música e pessoas */}
        <View style={styles.bottomInfo}>
          <View style={styles.iconTextRow}>
            <MusicIcon width={150} height={150} />
          </View>
          <View style={[styles.iconTextRow, { marginLeft: 12 }]}>
            <PeopleIcon width={120} height={170} />
          </View>
        </View>
      </View>

      {/* Botões laterais */}
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          {isLiked ? (
            <HeartActiveIcon width={40} height={40} />
          ) : (
            <HeartIcon width={40} height={40} />
          )}
          <Text style={styles.actionText}>{formatNumber(likesCount)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <CommentIcon width={40} height={40} />
          <Text style={styles.actionText}>{formatNumber(pulse.comments)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <ShareIcon width={40} height={40} />
          <Text style={styles.actionText}>{formatNumber(pulse.shares)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width, height, position: 'relative' },
  backgroundImage: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 12,
    paddingBottom: 90,
    width: '100%',
  },
  authorSection: { flexDirection: 'row', alignItems: 'center',},
  authorAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: 6 },
  authorName: { fontSize: 14, fontWeight: '600', color: '#fff', marginRight: 6 },
  followText: { fontSize: 20, color: 'red', marginLeft: 2 },
  captionSection: { marginBottom: 4 },
  caption: { fontSize: 15, color: '#fff', lineHeight: 20, width: '80%' },
  seeMore: { fontSize: 13, color: '#fff', fontWeight: '600', marginTop: 2 },

  
  iconTextRow: { flexDirection: 'row', alignItems: 'center' },
  likesAvatars: { flexDirection: 'row', marginLeft: 6 },
  likedAvatar: { width: 18, height: 18, borderRadius: 9, marginLeft: -6 },
  likesText: { fontSize: 11, color: '#fff', marginLeft: 6 },

  bottomInfo: { flexDirection: 'row', alignItems: 'center',position: 'absolute',
    
    bottom: -30},


  actionButtons: {
    position: 'absolute',
    right: 12,
    bottom: 120,
    alignItems: 'center',
  },
  actionButton: { alignItems: 'center', marginBottom: 30 },
  actionText: { fontSize: 12, color: '#fff', fontWeight: '600', marginTop: 2 },
});

export default PulseVideo;
