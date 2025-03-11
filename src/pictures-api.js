import axios from "axios";
const key = "jBwlHsH9W2ysWF_F0MeGx0_Nq7J-JavM4oeq8ZfN5yI";
const baseUrl = `https://api.unsplash.com/photos/?client_id=${key}`;
const fetchImages = async () => {
  const response = await axios.get(baseUrl);
  return console.log(response.data);
};
export default fetchImages;
