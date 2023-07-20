import { GET } from "../../services/index.js";

export const allCategories = async () => {
  const categories = await GET('products/categories');
  const response = await categories;

  return response
};

export const allProductsForCategory = async () => {
  const categories = ["women's clothing", "electronics", "jewelery"]
  
  const products = async(category) => {
    const response = await GET('products/category/'+category)
    return response;
  }

  const response = categories.map( async(category, index) => {
    const product = await products(category);
    return {id:index+1, category:category, items:product}
  });

  return response
}