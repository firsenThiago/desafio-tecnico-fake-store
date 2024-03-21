import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useProducts } from "@/hooks/products";
import { useCategories, Category } from "@/hooks/categories";
import { Text } from "@/components";
import ResumeCard from "@/components/ResumeCard/ResumeCard";

export const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const mockCategoriesPictures = {
    electronics:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    jewelery:
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    "men's clothing":
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    "women's clothing":
      "https://plus.unsplash.com/premium_photo-1661777373172-65269ff71d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  };

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <ResumeCard image={mockCategoriesPictures[item]} title={item} />
  );

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View>
        <Text size={24} weight="700">
          Categorias
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
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
  separator: {
    width: 10,
  },
});
export default Home;
