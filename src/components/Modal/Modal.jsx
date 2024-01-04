import { useSelector, useDispatch } from "react-redux";
import css from "./Modal.module.css";
import { selectModalData } from "../../redux/selectors";
import { setModalData } from "../../redux/filtersSlice";
import { Link } from "react-router-dom";

const Modal = () => {
  const modal = useSelector(selectModalData);
  const dispatch = useDispatch();

  const isModalOpen = (event) => {
    if (event.target.tagName === "DIV" || event.target.type === "button") {
      return dispatch(setModalData(""));
    }
  };

  return (
    <>
      {modal && (
        <div className={css.modal} onClick={isModalOpen}>
          <div>
            <button className={css.button} type="button">
              ╳
            </button>
            <img className={css.photo} src={modal.img_src} />
            <h3>Photo data:</h3>
            <ul>
              <li>Earth date: {modal.earth_date}</li>
              <li>Mars sol: {modal.sol}</li>
              <li>Rover: {modal.rover.name}</li>
              <li>Camera: {modal.camera.full_name}</li>
              <li>
                Link to original photo: <Link to={modal.img_src}>-link-</Link>
              </li>
            </ul>
            <h3>{modal.rover.name} rover data:</h3>
            <ul>
              <li>Landing date: {modal.rover.landing_date}</li>
              <li>Mars sol: {modal.rover.max_sol}</li>
              <li>Total photos: {modal.rover.total_photos}</li>
              <li>Status: {modal.rover.status}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
