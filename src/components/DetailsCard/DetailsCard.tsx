import { Product } from "@/hooks/products";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "../Text";

const DetailsCard = ({ ...product }: Product) => {
  return (
    <View style={styles.container}>
      <Text size={32} weight="700">
        {product.title}
      </Text>

      <Image
        source={{
          uri: product?.image,
        }}
        style={styles.image}
      />
      <Text size={24}>$ {product.price}</Text>
      <Text>{product.description}</Text>
      <Text>Category: {product.category}</Text>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 16,
    padding: 16,
    gap: 32,
  },
  image: {
    width: 150,
    height: 150,
  },
});
