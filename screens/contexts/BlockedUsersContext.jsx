import React, { createContext, useContext, useState } from 'react';

const BlockedUsersContext = createContext();

export const useBlockedUsers = () => {
  const context = useContext(BlockedUsersContext);
  if (!context) {
    throw new Error('useBlockedUsers must be used within a BlockedUsersProvider');
  }
  return context;
};

export const BlockedUsersProvider = ({ children }) => {
  const [blockedUsers, setBlockedUsers] = useState(new Set());

  const blockUser = (username) => {
    setBlockedUsers(prev => new Set([...prev, username]));
  };

  const unblockUser = (username) => {
    setBlockedUsers(prev => {
      const newSet = new Set(prev);
      newSet.delete(username);
      return newSet;
    });
  };

  const isUserBlocked = (username) => {
    return blockedUsers.has(username);
  };

  const getBlockedUsers = () => {
    return Array.from(blockedUsers);
  };

  return (
    <BlockedUsersContext.Provider value={{
      blockedUsers,
      blockUser,
      unblockUser,
      isUserBlocked,
      getBlockedUsers
    }}>
      {children}
    </BlockedUsersContext.Provider>
  );
};
