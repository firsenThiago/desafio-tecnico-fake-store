import { Text } from "@/components";
import { View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

interface ProductRouteParams {
  id: number;
}

interface ProductProps {
  route: RouteProp<{ Product: ProductRouteParams }, "Product">;
}
export const Product: React.FC<ProductProps> = ({ route }) => {
  const { id } = route.params;

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
