import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
  },
});

export default api;
