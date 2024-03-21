import { View, StyleSheet } from "react-native";
import { useProducts } from "@/hooks/products";
import { useCategories } from "@/hooks/categories";
import { Text } from "@/components";

export const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  return (
    <View style={styles.container}>
      <View>
        <Text size={24} weight="700">
          Categorias
        </Text>
        {categories?.map((category) => (
          <Text key={category}>{category}</Text>
        ))}
      </View>
      <View>
        {products?.map((product) => (
          <Text key={product.id}>{product.title}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default Home;
