import "./App.css";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import fetchImages from "../../pictures-api";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";



function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const data = await fetchImages(query);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      
    </>
  );
}

export default App;
