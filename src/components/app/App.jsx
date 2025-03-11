import "./App.css";
import SearchBar from "../searchBar/SearchBar";
import fetchImages from "../../pictures-api";

function App() {
  const handleSearch = (query) => {
    console.log(query);
  }
  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
