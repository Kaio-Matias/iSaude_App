import React, { createContext, useContext, useState } from 'react';

const UserBlockContext = createContext();

export const useUserBlock = () => {
  const context = useContext(UserBlockContext);
  if (!context) {
    throw new Error('useUserBlock must be used within a UserBlockProvider');
  }
  return context;
};

export const UserBlockProvider = ({ children }) => {
  const [blockedUsers, setBlockedUsers] = useState(new Set());

  const blockUser = (userId) => {
    setBlockedUsers(prev => new Set([...prev, userId]));
  };

  const unblockUser = (userId) => {
    setBlockedUsers(prev => {
      const newSet = new Set(prev);
      newSet.delete(userId);
      return newSet;
    });
  };

  const isUserBlocked = (userId) => {
    return blockedUsers.has(userId);
  };

  const getBlockedUsers = () => {
    return Array.from(blockedUsers);
  };

  return (
    <UserBlockContext.Provider value={{
      blockUser,
      unblockUser,
      isUserBlocked,
      getBlockedUsers,
    }}>
      {children}
    </UserBlockContext.Provider>
  );
};
