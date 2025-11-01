import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Importando ícones SVG
import VectorIcon from '../../../assets/Health/Vector.svg';
import LupaIcon from '../../../assets/Health/lupa.svg';
import Group6533Icon from '../../../assets/Health/Group 6533.svg';
import Group6544Icon from '../../../assets/Health/Group 6544.svg';
import UserSvgIcon from '../../../assets/Health/User.svg';
import CrownSvgIcon from '../../../assets/Health/Crown.svg';
import BurguerBarSvgIcon from '../../../assets/Health/BurguerBar.svg';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
});

// Ícones SVG reais
export const SearchIcon = () => <LupaIcon width={20} height={20} />;
export const FilterIcon = () => <Text style={styles.icon}>⚙️</Text>;
export const ShareIcon = () => <Text style={styles.icon}>📤</Text>;
export const ArrowIcon = () => <Text style={styles.icon}>→</Text>;
export const StarIcon = () => <Text style={styles.icon}>⭐</Text>;
export const HeartIcon = () => <Group6544Icon width={20} height={20} />;
export const StethoscopeIcon = () => <Text style={styles.icon}>🩺</Text>;
export const CalendarIcon = () => <Text style={styles.icon}>📅</Text>;
export const ChatIcon = () => <Text style={styles.icon}>💬</Text>;
export const CheckIcon = () => <Text style={styles.icon}>✅</Text>;
export const CreditCardIcon = () => <Text style={styles.icon}>💳</Text>;
export const DownloadIcon = () => <Text style={styles.icon}>📥</Text>;
export const LocationIcon = () => <VectorIcon width={16} height={16} />;
export const MicrophoneIcon = () => <Group6533Icon width={16} height={16} />;
export const UserIcon = () => <UserSvgIcon width={20} height={20} />;

// Ícones SVG reais adicionais
export const CrownIcon = () => <CrownSvgIcon width={16} height={12} />;
export const BurgerMenuIcon = () => <BurguerBarSvgIcon width={24} height={24} />;
