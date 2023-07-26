export const inCache = (key) => {
  const cache = localStorage.getItem(key);
  return cache;
}

export const createCache = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  const response = JSON.parse(inCache(key));
  return response;
}