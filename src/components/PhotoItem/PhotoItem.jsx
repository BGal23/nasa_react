import { useDispatch, useSelector } from "react-redux";
import { selectPhotos } from "../../redux/selectors";
import css from "./PhotoItem.module.css";
import PropTypes from "prop-types";
import { setModalData } from "../../redux/filtersSlice";

const PhotoItem = ({ photo }) => {
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();

  const modalOpen = (event) => {
    const photoID = Number(event.currentTarget.id);
    const element = photos.find((photo) => photo.id === photoID);
    return dispatch(setModalData(element));
  };

  return (
    <li id={photo.id} onClick={modalOpen}>
      <img className={css.photo} src={photo.img_src} alt="marian photo" />
    </li>
  );
};

export default PhotoItem;

PhotoItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img_src: PropTypes.string.isRequired,
  }),
};
