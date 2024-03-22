import { Text } from "@/components";
import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/router";

export const Product = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Product">>();

  const id = route.params?.id;

  return (
    <View style={styles.container}>
      <Text>Product Page {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Product;
