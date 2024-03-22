import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "../Text";
import { Button } from "../Button";
import Counter from "../Counter/Counter";
import { useCart } from "@/contexts";

interface CartCardProps {
  image: string;
  title: string;
  onPressRemove: () => void;
  price: number;
  id: number;
}

const CartCard = ({
  image,
  title,
  price,
  onPressRemove,
  id,
}: CartCardProps) => {
  const { cart, changeQuantity } = useCart();

  const quantity = cart.find((item) => item.id === id)?.quantity || 0;

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    changeQuantity(id, count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      changeQuantity(id, count - 1);
    }
  };

  return (
    <View>
      <View style={styles.containerProduct}>
        <Text size={14} weight="700">
          {title}
        </Text>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Text>$ {price}</Text>
      </View>
      <Counter
        count={count}
        onPressAdd={handleAdd}
        onPressDecrement={handleDecrement}
      />
      <Button title="Remover" onPress={onPressRemove} />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  containerProduct: {
    padding: 8,
    borderRadius: 16,
    gap: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
});
