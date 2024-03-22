import { api } from "@/services";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[] | undefined>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        const responseData: Product[] = response.data;
        setProducts(responseData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  return { products };
};

export const useProduct = (id: number | undefined) => {
  const [product, setProduct] = useState<Product | undefined>();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        const responseData: Product = response.data;
        setProduct(responseData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProduct();
  }, []);
  return { product };
};
