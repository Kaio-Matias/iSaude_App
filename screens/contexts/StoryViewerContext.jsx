import React, { createContext, useContext, useState } from 'react';
import { StoryViewer } from '../components/Stories/StoryViewer';

const StoryViewerContext = createContext();

export const useStoryViewer = () => {
  const context = useContext(StoryViewerContext);
  if (!context) {
    throw new Error('useStoryViewer must be used within a StoryViewerProvider');
  }
  return context;
};

export const StoryViewerProvider = ({ children }) => {
  const [globalStory, setGlobalStory] = useState(null);

  const showGlobalStory = (story) => {
    console.log('showGlobalStory called with:', story?.id);
    if (!story || !story.media || story.media.length === 0) {
      console.error('Invalid story data passed to showGlobalStory:', story);
      return;
    }
    setGlobalStory(story);
  };

  const hideGlobalStory = () => {
    console.log('hideGlobalStory called');
    setGlobalStory(null);
  };

  return (
    <StoryViewerContext.Provider value={{ showGlobalStory, hideGlobalStory }}>
      {children}
      {globalStory && (
        <StoryViewer
          story={globalStory}
          onClose={hideGlobalStory}
        />
      )}
    </StoryViewerContext.Provider>
  );
};

