import { Product } from "@/hooks/products";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "../Text";

const DetailsCard = ({ ...product }: Product) => {
  return (
    <View style={styles.container}>
      <>
        <Image
          source={{
            uri: product?.image,
          }}
          style={styles.image}
        />
        <Text>{product.title}</Text>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Text>{product.category}</Text>
      </>
    </View>
  );
};

export default DetailsCard;

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
