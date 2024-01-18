import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/operations";
import css from "./Button.module.css";
import { useState } from "react";
import {
  selectDate,
  selectIsLoading,
  selectPhotos,
} from "../../redux/selectors";

const Button = () => {
  const [photoLength, setPhotoLength] = useState(-1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const date = useSelector(selectDate);
  const button = useSelector(selectPhotos).length;

  const showButton = () => {
    if (button === 0) {
      return (
        <b>Sorry, there are no photos from this day. Try changing the date.</b>
      );
    } else if (button < 6 || button === photoLength) {
      return <b>These are all the photos we found.</b>;
    } else {
      return (
        <button className={css.button} type="button" onClick={nextPage}>
          Load more
        </button>
      );
    }
  };

  const nextPage = () => {
    dispatch(fetchData({ date: date, isNextPage: true }));
    setPhotoLength(button);
  };

  return <div className={css.display}>{!isLoading && showButton()}</div>;
};

export default Button;
