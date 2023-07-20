import { allProductsForCategory } from "./service.js";
import { createLoadingGif } from "../utilities/loading.js";

const createCategoryHead = (category) => `
  <div class="products__texts">
    <h3 class="products__title">${category}</h3>
    <a href="#" class="products__link" id="${category}">
      Ver todo 
      <i class="material-symbols-rounded">
        arrow_forward
      </i>
    </a>
  </div>`;

const createCategoryBody = ({ image, id, title, price }) => `
  <div class="products__card">
    <img class="products__card-img" src="${image}" alt="${id}">
    <p class="products__card-name">${title}</p>
    <p class="products__card-price">$${price}</p>
    <button class="products__card-btn" id="${id}">Ver producto</button>
  </div>`;

const createCategoryProductContainer = ({category, items}) => {
  const container = document.createElement('article');
 
  container.classList.add('all__container');
   container.innerHTML = `
    ${createCategoryHead(category)}
    <div class="products__cards-container">
      ${items.map(product => createCategoryBody(product)).join('')}
    </div>`;

  return container;
};

export const layout = async () => {
  const gif = createLoadingGif();
  const categories = await allProductsForCategory();
  const layoutContainer = document.querySelector('[data-products-container]');
  
  const loadingData = () => {
    layoutContainer.append(gif);
    
    Promise.all(categories.map(category => category.then(response => response)))
      .then(data => {
        gif.remove();
        data.forEach(categoryData => {
          layoutContainer.appendChild(createCategoryProductContainer(categoryData));
        });
      });
  };

  return loadingData();
};