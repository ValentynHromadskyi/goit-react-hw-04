import { useState, useEffect } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "./api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMore } from "./LoadMore/LoadMore";
import { Loading } from "./Loading/Loading";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await fetchArticles(query.split("/")[1], page);
        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={searchArticles} />
      {error && <b>error, please reload the page</b>}
      {images.length > 0 && !error && <ImageGallery items={images} />}
      {images.length > 0 && !loading && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-center" />
      {loading && <Loading />}
    </>
  );
}

export default App;
