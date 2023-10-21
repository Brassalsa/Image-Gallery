"use server";

const unsplash = async (route = "photos", query = "") => {
  const clientId = process.env.UNSPLASH_ACCESS_KEY;
  const url =
    "https://api.unsplash.com/" +
    route +
    "?" +
    query +
    "&client_id=" +
    clientId;

  const res = await fetch(url);
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
