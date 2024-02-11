import { useQuery } from "@tanstack/react-query"
import { def } from "../api/product-catalogue"

export const Homepage = () => {
    const productQuery = useQuery({
        queryKey: ['products'],
        queryFn: () => def.productControllerList(),
        select: ({ data }) => data
    })

    console.log(productQuery.data)
    return (<div>hello, good evening</div>)
}