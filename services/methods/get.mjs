import { baseUrl } from "./env.mjs";
export const GET = (url) => {
  const response = fetch(baseUrl+url)
  .then(response => response.json())
  .then(data => data)
  .catch(err => err.json);

  return response
}