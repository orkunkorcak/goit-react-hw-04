import "./App.css";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import fetchImages from "../../pictures-api";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setQuery(searchQuery);
      setPage(1);
      const data = await fetchImages(searchQuery, 1);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage(nextPage);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
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
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}

export default App;
