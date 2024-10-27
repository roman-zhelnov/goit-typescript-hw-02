import axios from "axios";

const MY_KEY = "Ow81xw2ixygjv-1JcPG5I6tsviM3_d-ZtMJD1W13fkg";
const BASE_URL = "https://api.unsplash.com/search/photos/";

export const fetchImages = async (page, query) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      query,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${MY_KEY}`,
    },
  });
  return data;
};
