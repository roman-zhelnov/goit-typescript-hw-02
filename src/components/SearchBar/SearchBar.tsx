import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
const SearchBar = ({ onSubmit }) => {
  const handleSubmitImg = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.searchInput.value;
    if (value.trim() === "") {
      form.reset();
      toast.error("Please enter your request!");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={s.header}>
      <Toaster position="top-right" reverseOrder={true} />
      <form className={s.form} onSubmit={handleSubmitImg}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
        <button className={s.btn} type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
