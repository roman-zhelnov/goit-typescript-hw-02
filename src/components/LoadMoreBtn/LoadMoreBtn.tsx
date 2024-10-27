import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.btnBox}>
      <button className={s.btn} type="button" onClick={() => onClick()}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
