import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "../Text";
import { Button } from "../Button";

interface CartCardProps {
  image: string;
  title: string;
  onPressRemove: () => void;
  price: number;
}

const CartCard = ({ image, title, price, onPressRemove }: CartCardProps) => {
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
