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
  const utcDay = 86400000;
  const utcTime = new Date(date).getTime();

  const setGetDate = async (event) => {
    let newDate;
    if (typeof event === "object") {
      newDate = event.currentTarget.value;
    } else {
      newDate = event;
    }

    if (!isNaN(newDate)) {
      newDate = new Date(Number(newDate));
      newDate = await changeDate(newDate);
    }
    return dispatch(fetchData({ date: newDate, isNextPage: false }));
  };

  const setButton = (event) => {
    if (event.currentTarget.name === "+") setGetDate(utcTime + utcDay);
    else setGetDate(utcTime - utcDay);
  };

  return (
    <>
      <input
        type="range"
        className={css.date}
        onChange={setGetDate}
        value={utcTime}
        min={landing}
        max={today.getTime()}
        step={utcDay}
      />
      <div className={css.buttons}>
        <button className={css.button} name="-" onClick={setButton}>
          -
        </button>
        <input
          type="date"
          value={date}
          onChange={setGetDate}
          min="2012-08-06"
          max={changeDate(today)}
        />
        <button className={css.button} name="+" onClick={setButton}>
          +
        </button>
      </div>
    </>
  );
};

export default GetDate;
