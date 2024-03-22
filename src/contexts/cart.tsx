import { createContext, useState, ReactNode, useContext } from "react";
import { Product } from "@/hooks/products";

interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
