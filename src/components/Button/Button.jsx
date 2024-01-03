import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/operations";
import css from "./Button.module.css";

const Button = () => {
  const dispatch = useDispatch();
  const nextPage = () => dispatch(fetchData(true));

  return (
    <div className={css.display}>
      <button className={css.button} type="button" onClick={nextPage}>
        Load more
      </button>
    </div>
  );
};

export default Button;
