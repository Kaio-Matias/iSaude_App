import React, { createContext, useContext, useState } from 'react';

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [showHomeFeed, setShowHomeFeed] = useState(false);

  return (
    <FeedContext.Provider value={{ showHomeFeed, setShowHomeFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);