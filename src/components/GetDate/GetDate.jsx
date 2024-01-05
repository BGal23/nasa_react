import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "../../redux/selectors";
import css from "./GetDate.module.css";
import { fetchData } from "../../redux/operations";
import changeDate from "../../redux/changeDate";

const GetDate = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const landing = new Date("2012-08-06").getTime();
  const today = new Date();

  const setGetDate = async (event) => {
    let newDate = event.currentTarget.value;

    if (!isNaN(newDate)) {
      newDate = new Date(Number(newDate));
      newDate = await changeDate(newDate);
    }
    return dispatch(fetchData({ date: newDate, isNextPage: false }));
  };

  return (
    <>
      <input
        className={css.date}
        type="range"
        onChange={setGetDate}
        value={new Date(date).getTime()}
        min={landing}
        max={today.getTime()}
        step={86400000}
      />
      <div className={css.buttons}>
        <button>-</button>
        <input
          type="date"
          value={date}
          onChange={setGetDate}
          min="2012-08-06"
          max={changeDate(today)}
        />
        <button>+</button>
      </div>
    </>
  );
};

export default GetDate;
