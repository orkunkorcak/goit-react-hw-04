import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const handleSearch = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (form.elements.query.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.searchbar}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
