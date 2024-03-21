import { View, Text, StyleSheet } from "react-native";
import { useProducts } from "@/hooks/products";

export const Home = () => {
  const { products } = useProducts();

  return (
    <View style={styles.container}>
      {products?.map((product) => (
        <Text key={product.id}>{product.title}</Text>
      ))}
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
export default Home;
