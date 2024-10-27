import { Image } from "./../App/App.types";
export interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  isClose: () => void;
}
