import { View, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/router";
import { useProduct } from "@/hooks/products";
import DetailsCard from "@/components/DetailsCard/DetailsCard";

export const Product = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Product">>();

  const id = route.params?.id;
  const { product } = useProduct(id);

  return (
    <View style={styles.container}>
      {product && <DetailsCard {...product} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Product;
