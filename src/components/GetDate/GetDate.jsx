import { useDispatch } from "react-redux";
import css from "./GetDate.module.css";
import { fetchData } from "../../redux/operations";

const GetDate = () => {
  const dispatch = useDispatch();
  const landing = new Date("2012-8-6").getTime();
  const today = new Date().getTime();

  const setGetDate = (event) => {
    const newDate = event.target.value;
    const formatDate = new Date(Number(newDate))
      .toISOString()
      .replace("T22:00:00.000Z", "")
      .split("-0")
      .join("-");

    dispatch(fetchData({ date: formatDate, isNextPage: false }));
  };

  return (
    <>
      <input
        className={css.date}
        type="range"
        onChange={setGetDate}
        min={landing}
        max={today}
        step={86400000}
      />
    </>
  );
};

export default GetDate;
