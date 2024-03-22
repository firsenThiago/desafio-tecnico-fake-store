import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  customButton?: ViewStyle;
}

const CustomButton = ({ onPress, title, customButton }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customButton]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00033c",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default CustomButton;
