import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/router";
import { useProduct } from "@/hooks/products";
import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { Text } from "@/components";

export const Product = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Product">>();

  const id = route.params?.id;
  const { product } = useProduct(id);

  return (
    <View style={styles.container}>
      <Text size={40} weight="700" style={{ alignSelf: "center" }}>
        Buy now
      </Text>
      {product && <DetailsCard {...product} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 40,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Product;
