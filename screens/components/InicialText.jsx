import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { style, fontes } from '../styles/styles';

export const InicialText = ({ Title, subTitle, text }) => {
  return (
    <View style={textStyle.textContent}>
      <Text style={textStyle.titleText}>{Title}</Text>
      <Text style={textStyle.subTitleText}>{subTitle}</Text>
      <Text style={textStyle.bodyText}>{text}</Text>
    </View>
  );
};

const textStyle = StyleSheet.create({
  textContent: {
    padding: 1,
    gap: 8,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 23,
    fontWeight: '700',
    color: "black",
    textAlign: 'left',
    fontFamily: fontes.InteloBold,
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: '700',
    color: "gray",
    textAlign: 'left',
    fontFamily: fontes.InteloBold,
  },
  bodyText: {
    fontSize: 17,
    fontWeight: '400',
    color: "gray",
    textAlign: 'left',
    fontFamily: fontes.InteloBold,
  }
});
