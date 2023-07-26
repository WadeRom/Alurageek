import { GET } from "../../services/index.mjs";
import { inCache, createCache } from "../utilities/cache.js";

const searchInstorage = (product, cacheKey) => {
  const items = JSON.parse(inCache(cacheKey));
  const results = items.filter(
    results => String(results.title)
    .toLocaleLowerCase()
    .includes(product.toLocaleLowerCase())
  );
  return results;
}

export const searchFilter = async (product) => {
  const stringSearch = String(product);
  const cacheName = "products";

  if (!inCache(cacheName)) {
    const request = await GET("products");
    createCache(cacheName, await request);
  }

  return searchInstorage(stringSearch, cacheName);

}

