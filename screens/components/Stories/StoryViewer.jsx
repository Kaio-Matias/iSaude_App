import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const StoryViewer = ({ 
  story, 
  onClose, 
  initialPosition = { x: 0, y: 0, width: 0, height: 0 } 
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const rotateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  
  // Progresso do story
  const progressRef = useRef(new Animated.Value(0)).current;
  const storyDuration = 5000; // 5 segundos por story

  // Gestos
  const panGestureRef = useRef();
  const progressAnimationRef = useRef(null);

  // Debug logs
  useEffect(() => {
    console.log('StoryViewer mounted with story:', story?.id);
    console.log('Story media count:', story?.media?.length);
  }, []);

  useEffect(() => {
    // Animação de entrada apenas com fade
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(true);
      startProgress();
    });

    // Cleanup function
    return () => {
      console.log('StoryViewer unmounting');
      if (progressAnimationRef.current) {
        progressAnimationRef.current.stop();
      }
    };
  }, []);

  // Reset progress when story index changes
  useEffect(() => {
    console.log('Story index changed to:', currentStoryIndex);
    progressRef.setValue(0);
    if (isVisible && !isPaused && !isTransitioning) {
      startProgress();
    }
  }, [currentStoryIndex]);

  const startProgress = () => {
    if (!story?.media || currentStoryIndex >= story.media.length) {
      console.log('Invalid story or index, closing');
      closeStory();
      return;
    }

    if (progressAnimationRef.current) {
      progressAnimationRef.current.stop();
    }

    const currentMedia = story.media[currentStoryIndex];
    const duration = currentMedia.duration || storyDuration;
    
    console.log('Starting progress for story:', currentStoryIndex, 'duration:', duration);
    
    progressAnimationRef.current = Animated.timing(progressRef, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    });

    progressAnimationRef.current.start(() => {
      console.log('Progress completed, moving to next story');
      nextStory();
    });
  };

  const pauseProgress = () => {
    console.log('Pausing progress');
    if (progressAnimationRef.current) {
      progressAnimationRef.current.stop();
    }
  };

  const resumeProgress = () => {
    console.log('Resuming progress');
    if (!isPaused && !isTransitioning) {
      startProgress();
    }
  };

  const nextStory = () => {
    if (isTransitioning) return;
    if (!story?.media || story.media.length === 0) return;
  
    if (currentStoryIndex < story.media.length - 1) {
      setIsTransitioning(true);
      animateStoryTransition(1);
      setCurrentStoryIndex(prev => {
        const nextIndex = prev + 1;
        return nextIndex >= story.media.length ? story.media.length - 1 : nextIndex;
      });
    } else {
      closeStory();
    }
  };
  
  const previousStory = () => {
    if (isTransitioning) return;
    if (!story?.media || story.media.length === 0) return;
  
    if (currentStoryIndex > 0) {
      setIsTransitioning(true);
      animateStoryTransition(-1);
      setCurrentStoryIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const animateStoryTransition = (direction) => {
    // Pausar progresso durante transição
    pauseProgress();

    // Animação 3D de cubo melhorada
    const animations = [
      Animated.timing(translateX, {
        toValue: direction * screenWidth * 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(rotateY, {
        toValue: direction * 0.3,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
    ];

    Animated.parallel(animations).start(() => {
      // Reset das animações
      translateX.setValue(0);
      rotateY.setValue(0);
      scale.setValue(1);
      
      // Retomar progresso após transição
      setTimeout(() => {
        setIsTransitioning(false);
        resumeProgress();
      }, 100);
    });
  };

  const closeStory = () => {
    console.log('Closing story viewer');
    pauseProgress();
    
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      const threshold = screenWidth * 0.25;

      console.log('Gesture ended, translationX:', translationX, 'threshold:', threshold);

      if (translationX > threshold) {
        // Swipe para direita - story anterior
        previousStory();
      } else if (translationX < -threshold) {
        // Swipe para esquerda - próximo story
        nextStory();
      } else {
        // Volta para posição original
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const handleLongPress = () => {
    console.log('Long press detected, toggling pause');
    setIsPaused(!isPaused);
    if (isPaused) {
      resumeProgress();
    } else {
      pauseProgress();
    }
  };

  // Validação de dados
  if (!story || !story.media || story.media.length === 0) {
    console.error('Invalid story data:', story);
    return null;
  }

  const currentMedia = story.media[currentStoryIndex];
  if (!currentMedia) {
    console.error('Invalid media at index:', currentStoryIndex);
    return null;
  }

  const isVideo = currentMedia.type === 'video';

  const renderMedia = () => {
    if (isVideo) {
      return (
        <View style={styles.videoPlaceholder}>
          <Text style={styles.videoText}>🎥 Vídeo</Text>
          <Text style={styles.videoSubtext}>{currentMedia.url}</Text>
        </View>
      );
    } else {
      return (
        <Image 
          source={{ uri: currentMedia.url }} 
          style={styles.media}
          resizeMode="cover"
        />
      );
    }
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        }
      ]}
    >
      <StatusBar hidden={true} />
      
      <PanGestureHandler
        ref={panGestureRef}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
        activeOffsetX={[-10, 10]}
        failOffsetY={[-20, 20]}
      >
        <Animated.View 
          style={[
            styles.content,
            {
              transform: [
                { translateX },
                { rotateY: rotateY.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['-20deg', '20deg'],
                  })},
                { scale },
                { perspective: 1000 },
              ],
            }
          ]}
        >
          {/* Header do Story */}
          <View style={styles.header}>
            <View style={styles.profileInfo}>
              <Image source={{ uri: story.profileImage }} style={styles.profileImage} />
              <Text style={styles.username}>{story.username}</Text>
            </View>
            <TouchableOpacity onPress={closeStory} style={styles.closeButton}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Barra de Progresso */}
          <View style={styles.progressContainer}>
            {story.media.map((_, index) => (
              <View key={index} style={styles.progressBar}>
                <Animated.View
                  style={[
                    styles.progressFill,
                    {
                      width: index === currentStoryIndex 
                        ? progressRef.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '100%'],
                          })
                        : index < currentStoryIndex ? '100%' : '0%',
                    },
                  ]}
                />
              </View>
            ))}
          </View>

          {/* Conteúdo do Story */}
          <TouchableOpacity 
            style={styles.mediaContainer}
            onLongPress={handleLongPress}
            activeOpacity={1}
          >
            {renderMedia()}
            
            {/* Indicador de story atual */}
            <View style={styles.storyIndicator}>
              <Text style={styles.storyCounter}>
                {currentStoryIndex + 1} / {story.media.length}
              </Text>
            </View>

            {/* Indicador de pausa */}
            {isPaused && (
              <View style={styles.pauseIndicator}>
                <Text style={styles.pauseText}>⏸️ Pausado</Text>
              </View>
            )}

            {/* Debug info */}
            {__DEV__ && (
              <View style={styles.debugInfo}>
                <Text style={styles.debugText}>
                  Index: {currentStoryIndex} | Paused: {isPaused ? 'Y' : 'N'} | Transitioning: {isTransitioning ? 'Y' : 'N'}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Área de Interação */}
          <View style={styles.interactionArea}>
            <TouchableOpacity 
              style={[styles.interactionSide, styles.leftSide]} 
              onPress={previousStory}
            />
            <TouchableOpacity 
              style={[styles.interactionSide, styles.rightSide]} 
              onPress={nextStory}
            />
          </View>

          {/* Input de Comentário */}
          <View style={styles.commentContainer}>
            <View style={styles.commentInput}>
              <Text style={styles.commentPlaceholder}>
                Envie um comentário para @{story.username}
              </Text>
            </View>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendIcon}>📤</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    zIndex: 9999,
    width: screenWidth,
    height: screenHeight,
    elevation: 9999, // Para Android
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    zIndex: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 4,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  mediaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  videoSubtext: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  storyIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  storyCounter: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  pauseIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  pauseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  debugInfo: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  debugText: {
    color: '#fff',
    fontSize: 10,
  },
  interactionArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  interactionSide: {
    flex: 1,
  },
  leftSide: {
    // Para voltar ao story anterior
  },
  rightSide: {
    // Para próximo story
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  commentInput: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  commentPlaceholder: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    color: '#fff',
    fontSize: 18,
  },
});
