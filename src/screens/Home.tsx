import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useProducts, Product } from "@/hooks/products";
import { useCategories, Category } from "@/hooks/categories";
import { Text } from "@/components";
import ResumeCard from "@/components/ResumeCard/ResumeCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/router";
import { useState } from "react";

export const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >([]);

  const mockCategoriesPictures = {
    electronics:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    jewelery:
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    "men's clothing":
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    "women's clothing":
      "https://plus.unsplash.com/premium_photo-1661777373172-65269ff71d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    all: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const renderItemCategory: ListRenderItem<Category> = ({ item, index }) => {
    return (
      <>
        {index === 0 && (
          <View style={{ alignSelf: "center" }}>
            <Text size={32} style={styles.title}>
              Categorias
            </Text>
          </View>
        )}
        {index === 0 && (
          <ResumeCard
            image={mockCategoriesPictures["all"]}
            title={"Todas"}
            onPress={() => handleCategoryPress("all")}
          />
        )}
        <ResumeCard
          image={mockCategoriesPictures[item]}
          title={item}
          onPress={() => handleCategoryPress(item)}
        />
      </>
    );
  };

  const renderItemProduct: ListRenderItem<Product> = ({ item }) => (
    <ResumeCard
      image={item.image}
      title={item.title}
      onPress={() => handleProductPress(item.id)}
    />
  );

  const handleCategoryPress = (category: string) => {
    const filteredProducts = products?.filter(
      (product) => product.category === category
    );
    if (category === "all") return setFilteredProducts(products);

    setFilteredProducts(filteredProducts);
  };

  const productList =
    filteredProducts && filteredProducts.length > 0
      ? filteredProducts
      : products;

  const handleProductPress = (id: number) => {
    navigation.navigate("Product", { id });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text size={32} style={styles.title}>
          Produtos
        </Text>
        <FlatList
          ListHeaderComponent={
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={renderItemCategory}
            />
          }
          data={productList}
          renderItem={renderItemProduct}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    color: "#00333c",
  },
});
export default Home;
