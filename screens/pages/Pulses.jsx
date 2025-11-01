import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { colors } from '../styles/styles';

// Componentes
import PulseVideo from '../components/Pulses/PulseVideo';
import PulseHeader from '../components/Pulses/PulseHeader';

// Dados mockados
import { pulsesData } from '../data/pulsesData';

const { width, height } = Dimensions.get('window');

const Pulses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderPulse = ({ item, index }) => (
    <PulseVideo
      pulse={item}
      index={index}
      isActive={currentIndex === index}
    />
  );

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <PulseHeader />
      
      {/* Lista de vídeos */}
      <FlatList
        ref={flatListRef}
        data={pulsesData}
        renderItem={renderPulse}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Pulses;
