import { useQuery } from "@tanstack/react-query"
import { productApi } from "../api/product-catalogue"

export const Homepage = () => {
    const productQuery = useQuery({
        queryKey: ['products'],
        queryFn: () => productApi.listProducts(),
        select: ({ data }) => data
    })

    console.log(productQuery.data)
    return (<div>hello, good evening</div>)
}