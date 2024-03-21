import { api } from "@/services";
import { useEffect, useState } from "react";

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[] | undefined>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/categories");
        const responseData: Category[] = response.data;
        setCategories(responseData);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    fetchCategories();
  }, []);

  return { categories };
};
