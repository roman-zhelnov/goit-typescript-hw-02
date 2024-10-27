import { useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "./App.types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, query]);

  const handleSubmitImage = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handelImageClick = (image: Image) => {
    if (image) {
      setSelectedImage(image);
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitImage} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handelImageClick} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          image={selectedImage}
          isClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
