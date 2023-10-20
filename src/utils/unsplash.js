const unsplash = (route = "photos", query = "") => {
  const clientId = process.env.UNSPLASH_ACCESS_KEY;
  const url =
    "https://api.unsplash.com/" +
    route +
    "?" +
    query +
    "&client_id=" +
    clientId;

  return url;
};
export default unsplash;
