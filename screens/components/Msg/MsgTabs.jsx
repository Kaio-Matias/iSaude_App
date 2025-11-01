import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const MsgTabs = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'principal', title: 'Principal' },
    { id: 'arquivados', title: 'Arquivados' },
    { id: 'solicitacoes', title: 'Solicitações' },
  ];

  return (
    <View style={styles.tabsContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            activeTab === tab.id && styles.activeTab
          ]}
          onPress={() => onTabPress(tab.id)}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab.id && styles.activeTabText
          ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tab: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 17 ,
    fontWeight: '500',
    color: '#8E8E93',
  },
  activeTabText: {
    color: 'white',
  },
});
