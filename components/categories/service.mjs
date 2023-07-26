import { GET } from "../../services/index.mjs";

export const allCategories = async () => {
  const categories = await GET('products/categories');
  const response = await categories;

  return response
};

export const allProductsForCategory = async (limit) => {
  const max = limit || '6';
  const categories = ["men's clothing", "electronics", "women's clothing", "jewelery"];

  const products = async(category) => {
    const response = await GET(`products/category/${category}?limit=${max}`);
    return response;
  }

  const response = categories.map( async(category) => {
    const product = await products(category);
    return {category:category, items:product}
  });

  return response
}