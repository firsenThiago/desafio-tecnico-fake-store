import { Text } from "@/components";
import { Button } from "@/components/Button";
import CartCard from "@/components/CartCard/CartCard";
import { useCart } from "@/contexts";
import { Product } from "@/hooks/products";
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/router";

export const Cart = () => {
  const { cart, removeFromCart, priceTotal, emptyCart } = useCart();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderItemCart: ListRenderItem<Product> = ({ item }) => (
    <CartCard
      title={item.title}
      image={item.image}
      price={item.price}
      onPressRemove={() => removeFromCart(item.id)}
      id={item.id}
    />
  );
  const Separator = () => <View style={{ marginTop: 32 }} />;
  return (
    <View style={styles.container}>
      {cart.length === 0 && (
        <View style={styles.containerEmptyCart}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
        </View>
      )}
      <FlatList
        data={cart}
        renderItem={renderItemCart}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={
          <Button
            title="Voltar aos produtos"
            onPress={() => navigation.navigate("Home")}
            customButton={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 50,
            }}
          />
        }
      />

      {cart.length > 0 && (
        <>
          <Text size={32}>$ {priceTotal.toFixed(2)}</Text>
          <Button
            title="Finalizar pedido"
            onPress={() => {
              emptyCart();
              navigation.navigate("Payment");
            }}
            customButton={{
              width: 300,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
  },
  containerEmptyCart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40,
    gap: 56,
  },
});
