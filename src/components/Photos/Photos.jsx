import { useSelector } from "react-redux";
import { selectIsLoading, selectPhotos } from "../../redux/selectors";
import css from "./Photos.module.css";
import Loader from "../Loader/Loader";

const Photos = () => {
  const list = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.gallery}>
      {list.map((photo) => (
        <img
          className={css.photo}
          key={photo.id}
          src={photo.img_src}
          alt="marian photo"
        />
      ))}
      {isLoading && <Loader />}
    </div>
  );
};

export default Photos;
