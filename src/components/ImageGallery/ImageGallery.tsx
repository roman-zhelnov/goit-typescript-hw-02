import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <div className={s.galleryBox}>
      <ul className={s.gallery}>
        {images.map((item) => (
          <li key={item.id}>
            <ImageCard image={item} onClick={() => onClick(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
