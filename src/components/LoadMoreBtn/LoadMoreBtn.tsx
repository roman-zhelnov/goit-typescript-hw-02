import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={s.btnBox}>
      <button className={s.btn} type="button" onClick={() => onClick()}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
