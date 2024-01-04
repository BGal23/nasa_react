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
        tab if you want to learn more about &ldquo;Timeline of Mars Science
        Laboratory&rdquo; missions and Curiosity rover. Or go straight to the
        <Link className={css.link} to="gallery">
          {" "}
          Gallery{" "}
        </Link>
        tab if you want to see photos from this mission.
      </p>
      <div className={css.robotContainer}>
        <img className={css.robot} src={robot} alt="robot" />
      </div>
      <h2>Pictures</h2>
      <p>
        The Curiosity rover&rsquo;s mission has provided a wealth of captivating
        images, offering unprecedented views of the Martian landscape. These
        photos showcase the rugged terrain, revealing the diverse geological
        features that have fueled scientific exploration. From breathtaking
        panoramas to close-ups of intriguing rock formations, Curiosity&rsquo;s
        images have deepened our understanding of Mars&rsquo; history and
        environment. The rover&rsquo;s camera systems have been instrumental in
        capturing the Red Planet&rsquo;s unique beauty, providing a visual
        journey for scientists and space enthusiasts alike.
      </p>
      <div className={css.container}>
        <img className={css.mars} src={mars} alt="mars" />
      </div>
    </main>
  );
};

export default MainPage;
