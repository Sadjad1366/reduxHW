import axios from "axios"
import { useQuery } from "react-query";



const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
}

export const useProducts = () => {
      return useQuery('products',fetchProducts)
}
