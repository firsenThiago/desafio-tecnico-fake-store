import { View, StyleSheet } from "react-native";
import { Text } from "../Text";
import { Button } from "../Button";

interface CounterProps {
  count: number;
  onPressAdd: () => void;
  onPressDecrement: () => void;
}

const Counter = ({ count, onPressAdd, onPressDecrement }: CounterProps) => {
  return (
    <View style={styles.container}>
      <Button title="-" onPress={onPressDecrement} />
      <Text size={24}>{count}</Text>
      <Button title="+" onPress={onPressAdd} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
