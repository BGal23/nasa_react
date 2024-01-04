import { useSelector } from "react-redux";
import { selectIsLoading, selectPhotos } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import PhotoItem from "../PhotoItem/PhotoItem";
import css from "./Photos.module.css";

const Photos = () => {
  const list = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.gallery}>
      {list.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
      {isLoading && <Loader />}
    </ul>
  );
};

export default Photos;
