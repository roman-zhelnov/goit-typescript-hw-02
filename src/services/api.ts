import axios from "axios";
import { Image } from "../components/App/App.types";

const MY_KEY = "Ow81xw2ixygjv-1JcPG5I6tsviM3_d-ZtMJD1W13fkg";
const BASE_URL = "https://api.unsplash.com/search/photos/";

interface ImageResponse {
  results: Image[];
  total: number;
  total_page: number;
}

export const fetchImages = async (
  page: number,
  query: string
): Promise<ImageResponse> => {
  try {
    const { data } = await axios.get<ImageResponse>(BASE_URL, {
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};
