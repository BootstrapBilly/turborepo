import { DefaultApi } from "@billy-catchpole/product-catalogue-open-api-client";

export const def = new DefaultApi({
    basePath: 'http://localhost:3000',
    isJsonMime: () => false,
})