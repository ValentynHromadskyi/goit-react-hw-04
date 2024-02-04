import css from "./LoadMore.module.css";

export function LoadMore({ handleLoadMore }) {
  return (
    <button className={css.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
}
