import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './styles/styles.js'

import { TAB_CONFIG } from './utils/tab.config';
import { AnimatedTabBarIcon } from './animations/AnimatedTabBarIcon';

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarInactiveTintColor: '#202124',
        tabBarActiveTintColor: colors.principalColor,
        tabBarActiveBackgroundColor: '#d9eefcff',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarItemStyle: styles.tabBarItem,
        tabBarIcon: ({ focused }) => {
          const { active, inactive } = TAB_CONFIG[route.name].icons;
          return (
            <AnimatedTabBarIcon
              focused={focused}
              ActiveIcon={active}
              InactiveIcon={inactive}
            />
          );
        },
      })}
    >
      {Object.entries(TAB_CONFIG).map(([name, config]) => (
        <Tab.Screen
          key={name}
          name={name}
          component={config.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height:95,
    position: 'absolute',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabBarItem: {
  height: '100%',  
  },

  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});
