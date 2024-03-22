import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useProducts, Product } from "@/hooks/products";
import { useCategories, Category } from "@/hooks/categories";
import { Text } from "@/components";
import ResumeCard from "@/components/ResumeCard/ResumeCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/router";
import { useState } from "react";
import { mockCategoriesPictures } from "@/mocks";

export const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >([]);

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
