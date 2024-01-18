import { Link } from "react-router-dom";
import css from "./MainPage.module.css";
import robot from "../../images/robot.png";
import mars from "../../images/mars.gif";

const MainPage = () => {
  return (
    <main className={css.main}>
      <div>
        <h2>Welcome to Mars page</h2>
        <p>
          Explore the wonders of Mars through our website's captivating gallery.
          We curate a collection of images sourced directly from NASA's
          repository, showcasing the journey of the Curiosity rover from its
          landing day to the present. The{" "}
          <Link className={css.link} to="gallery">
            {" "}
            Gallery{" "}
          </Link>{" "}
          tab provides a visual timeline, allowing you to witness the Red
          Planet's dynamic landscapes and the rover's discoveries. Immerse
          yourself in the breathtaking scenery of Mars, all conveniently
          accessible in one place. Join us on this interplanetary adventure,
          brought to your screen with the latest imagery from the Curiosity
          mission.
        </p>
        <div className={css.container}>
          <img className={css.robot} src={robot} alt="robot" />
        </div>
      </div>
      <div>
        <h2>Pictures</h2>
        <p>
          The images captured by the Mars rover Curiosity offer a breathtaking
          glimpse into the Martian landscape. Curiosity, part of NASA's Mars
          Science Laboratory mission, landed on the Red Planet on August 5,
          2012.
        </p>
        <div className={css.container}>
          <img className={css.mars} src={mars} alt="mars" />
        </div>
        <p>
          Equipped with advanced scientific instruments, including a
          high-resolution camera, Curiosity has been exploring the Gale Crater,
          analyzing rocks, soil, and atmosphere to understand Mars' geological
          history and the potential for past life. The images depict stunning
          vistas of the crater, revealing layered rock formations and the
          diverse terrain. These visual records not only aid scientific research
          but also captivate the imagination, fostering a deeper connection to
          the mysteries of our planetary neighbor.
        </p>
      </div>
    </main>
  );
};

export default MainPage;
