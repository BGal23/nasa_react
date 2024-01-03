import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/operations";
import css from "./Button.module.css";
import { selectIsLoading } from "../../redux/selectors";

const Button = () => {
  const dispatch = useDispatch();
  const nextPage = () => dispatch(fetchData(true));
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.display}>
      {!isLoading && (
        <button className={css.button} type="button" onClick={nextPage}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Button;
