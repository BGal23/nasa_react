import { Link } from "react-router-dom";
import css from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={css.main}>
      <h2>Welcome to Mars page</h2>
      <p>
        0n this page you can see photos from the mission to mars. Click on the
        <Link className={css.link} to="about">
          {" "}
          About{" "}
        </Link>
        tab if you want to learn more about missions to Mars. Or go straight to
        the
        <Link className={css.link} to="gallery">
          {" "}
          Gallery{" "}
        </Link>
        tab if you want to see photos
      </p>
      <img className={css.robot} src="../../images/robot.png" alt="robot" />
    </main>
  );
};

export default MainPage;
