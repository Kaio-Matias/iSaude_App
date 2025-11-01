
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export const AnimatedTabBarIcon = ({ focused, InactiveIcon, ActiveIcon }) => {
  const animation = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focused ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <View style={styles.iconContainer}>

      <Animated.View style={[styles.icon, { opacity: animation }]}>
        <ActiveIcon width={30} height={30} />
      </Animated.View>
      

      <Animated.View style={[styles.icon, { 
        opacity: animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] })
      }]}>
        <InactiveIcon width={30} height={30} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 30, 
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
  },
});
