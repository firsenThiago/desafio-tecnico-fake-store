import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/router";
import { useProduct } from "@/hooks/products";
import DetailsCard from "@/components/DetailsCard/DetailsCard";
import { Text } from "@/components";
import { Button } from "@/components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@/contexts/cart";

export const Product = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Product">>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const id = route.params?.id;
  const { product } = useProduct(id);
  const { setCart, cart } = useCart();

  return (
    <View style={styles.container}>
      {product && (
        <>
          <Text
            size={40}
            weight="700"
            style={{ alignSelf: "center", color: "#00333c" }}
          >
            Buy now
          </Text>
          <DetailsCard {...product} />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => {
              setCart([...cart, product]);
              navigation.navigate("Cart");
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Product;
