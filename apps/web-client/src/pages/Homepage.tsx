import { useQuery } from "@tanstack/react-query";
import { Product } from "@billy-catchpole/product-catalogue-open-api-client";
import { productApi } from "../api/product-catalogue";

export const car: Product = {
  description: "A car",
  id: "1",
  name: "Bmw",
  price: 80000,
};

export const Homepage = () => {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => productApi.listProducts(),
    select: ({ data }) => data,
  });

  console.log(productQuery.data);
  return <div>hello, good evening</div>;
};
