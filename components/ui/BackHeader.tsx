import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

interface BackHeaderProps {
  title: string;
  onBackPress?: () => void;
  hideBackIcon?: boolean;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ title, onBackPress, hideBackIcon }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center px-6 pt-8 pb-2">
      {!hideBackIcon ? (
        <TouchableOpacity
          onPress={onBackPress ? onBackPress : () => navigation.goBack()}
          className="mr-2"
        >
          <ChevronLeft size={24} color="#222" />
        </TouchableOpacity>
      ) : (
        // Se não tiver ícone, adiciona um marginRight maior para alinhar o título
        <View style={{ paddingHorizontal: 0 }} />
      )}
      <Text className="text-2xl font-semibold">{title}</Text>
    </View>
  );
};
