import { api } from "@/services";
import { useEffect, useState } from "react";

type Category = string;

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
