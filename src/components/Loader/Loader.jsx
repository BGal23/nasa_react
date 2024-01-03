import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <div className={css.planet}></div>
    </div>
  );
};

export default Loader;
