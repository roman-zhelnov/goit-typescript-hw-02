import { Image } from "../App/App.types";

export interface ImageCardProps {
  image: Image;
  onClick: (item: Image) => void;
}
