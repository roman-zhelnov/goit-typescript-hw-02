import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { FormEvent } from "react";
import { SearchBarProps } from "./SearchBar.types";
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmitImg = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const elements = form.elements as HTMLFormControlsCollection;
    const searchInput = elements.namedItem("searchInput") as HTMLInputElement;
    const value = searchInput.value;
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
