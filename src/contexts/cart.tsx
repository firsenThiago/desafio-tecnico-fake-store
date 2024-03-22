import { createContext, useState, ReactNode, useContext } from "react";
import { Product } from "@/hooks/products";

interface ProductWithQuantity extends Product {
  quantity: number;
}

interface CartContextType {
  cart: ProductWithQuantity[];
  addToCart: (product: ProductWithQuantity) => void;
  removeFromCart: (productId: number) => void;
  priceTotal: number;
  changeQuantity: (id: number, quantity: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  priceTotal: 0,
  changeQuantity: () => [],
  emptyCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);

  const addToCart = (product: ProductWithQuantity) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index === -1) {
        return [...prevCart, product];
      } else {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += product.quantity;
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const priceTotal = calculateTotalPrice();

  const changeQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }
        return item;
      });
    });
  };

  const emptyCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        priceTotal,
        changeQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
