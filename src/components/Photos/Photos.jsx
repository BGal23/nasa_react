import { useSelector } from "react-redux";
import { selectPhotos } from "../../redux/selectors";
import css from "./Photos.module.css";

const Photos = () => {
  const list = useSelector(selectPhotos);

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
    </div>
  );
};

export default Photos;
