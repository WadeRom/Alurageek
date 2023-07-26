import { searchFilter } from "./service.mjs";

export const searchInput = document.querySelector('[data-search-input]');
const searhContainer = document.querySelector('[data-search-container]');

const createSearchNodes = resultsArr => resultsArr.map(
  result => searchNodeHTML(result)
); 

const searchNodeHTML = (result) => `
  <li class="search__results-item">
    <img src="${result.image}" class="search__results-image">
    <a href="" class="search__results-link">
      <p>${result.title}</p>
      <p>$${result.price}</p>
    </a>
  </li>
`

const searchListNode = (node) => {
  const listContainer = document.querySelector('[data-search-list]');
  return listContainer.innerHTML = node.join('');
}

const searchDisplayNode = () => {
  const container = document.querySelector('[data-search-container]');
  return container
}

const showDisplay = (applyCss, node) => node.classList.remove(applyCss)
const removeDisplay = (applyCss, node) => node.classList.add(applyCss);

const createDisplaySearch = (requestArr) => {
  const searchItem = createSearchNodes(requestArr);
  const searchList = searchListNode(searchItem);
  const searchDisplay = searchDisplayNode();

  requestArr.lenght !== 0 
  ?showDisplay('search_not_display', searchDisplay)
  :removeDisplay('search_not_display', searchDisplay)

}

searchInput.addEventListener("keyup", async(evn) =>{
  const searchString = evn.target.value;
  const searchRequest = await searchFilter(searchString);
  const searchDisplay = createDisplaySearch(searchRequest);

  return searchDisplay
})

searchInput.addEventListener("blur", () => removeDisplay('search_not_display', searhContainer))