import { ReactNode } from "react";
import { Text, StyleSheet, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  children: ReactNode;
  size?: number;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  style?: object;
}

const CustomText = ({
  children,
  style,
  size,
  weight,
  ...props
}: CustomTextProps) => {
  const customStyle = {
    fontSize: size || 16,
    fontWeight: weight || "normal",
    ...style,
  };

  return (
    <Text style={[styles.text, customStyle]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Helvetica Neue",
  },
});
