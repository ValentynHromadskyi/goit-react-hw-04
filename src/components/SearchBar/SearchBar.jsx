import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.input.value.trim() === "") {
      toast.error("Enter text to search!");
      return;
    }

    onSubmit(e.target.elements.input.value);
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="input"
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
