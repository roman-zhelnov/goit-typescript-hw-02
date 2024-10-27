import { Image } from "../App/App.types";

export interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}
