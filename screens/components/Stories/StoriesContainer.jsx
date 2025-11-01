import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';

import { StoryFlash } from './StoryFlash';
import { useStoryViewer } from '../../pages/App';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const StoriesContainer = ({ stories = [] }) => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [viewedStories, setViewedStories] = useState(new Set());
  const { showGlobalStory } = useStoryViewer();
  
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const handleStoryPress = (story, position) => {
    setInitialPosition(position);
    showGlobalStory(story);
    
    // Marcar como visualizado
    setViewedStories(prev => new Set([...prev, story.id]));
  };

  const handleMeasure = (position) => {
    setInitialPosition(position);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {stories.map((story) => (
            <StoryFlash
              key={story.id}
              story={story}
              isActive={viewedStories.has(story.id)}
              onPress={() => handleStoryPress(story, initialPosition)}
              onMeasure={handleMeasure}
            />
          ))}
        </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
});
