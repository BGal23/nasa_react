import { Link } from "react-router-dom";
import css from "./MainPage.module.css";
import robot from "../../images/robot.png";
import mars from "../../images/mars.gif";

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
      <div className={css.robotContainer}>
        <img className={css.robot} src={robot} alt="robot" />
      </div>
      <h2>Test title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        soluta, officia nihil debitis optio mollitia laboriosam perspiciatis
        excepturi rem repellat iste vel, itaque ipsa. Delectus dolorum unde
        recusandae nulla odit reprehenderit a, obcaecati voluptates blanditiis
        dolore itaque deserunt labore voluptas laudantium quos eaque harum ipsam
        nesciunt ratione dolorem maiores perferendis eligendi, alias modi! Culpa
        assumenda soluta quas debitis vitae perspiciatis asperiores obcaecati
        saepe, consequatur suscipit eius voluptate reprehenderit accusantium
        temporibus? Voluptatem optio, vitae laborum placeat ipsum odit
        accusantium obcaecati? Labore, perspiciatis modi hic enim qui officia
        quae, saepe vero rerum totam neque vel sequi omnis incidunt, non quas
        veniam quis?
      </p>
      <div className={css.container}>
        <img className={css.mars} src={mars} alt="mars" />
      </div>
    </main>
  );
};

export default MainPage;
