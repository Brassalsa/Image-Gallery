"use server";

const unsplash = async (route = "photos", query = "") => {
  let clientId = process.env.UNSPLASH_ACCESS_KEY;
  const url = (client_id = clientId) =>
    "https://api.unsplash.com/" +
    route +
    "?" +
    query +
    "&client_id=" +
    clientId;

  let res = await fetch(url(clientId));
  if (!res.ok) {
    clientId = process.env.UNSPLASH_ACCESS_KEY_2;
    res = await fetch(url(clientId));
  }
  const data = await res.json();
  return data;
};

export const debounceSearch = async (route = "/search/photos", query) => {
  if (query) {
    const res = await unsplash(route, "query=" + query + "&per_page=" + 5);

    return res.results;
  }
};
export default unsplash;
