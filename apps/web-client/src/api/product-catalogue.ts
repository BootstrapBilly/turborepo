import { ProductApi } from "@billy-catchpole/product-catalogue-open-api-client";

export const productApi = new ProductApi({
    basePath: 'http://localhost:3000',
    isJsonMime: () => false,
})