import style from "./CreatorPage.module.css";
import photo from "../../images/user.png";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import js from "../../images/js.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import git from "../../images/git.svg";

const CreatorPage = () => {
  return (
    <main className={style.creator}>
      <h2>Creator page</h2>
      <div className={style.me}>
        <img className={style.photo} src={photo} alt="creator photo" />
        <p className={style.text}>
          Hello My name is Bartek Gal, I have been learning JavaScript
          programming since April 2023. The website I created was created as
          part of learning the React library. It uses the REST API to download
          images from the NASA website.
        </p>
        <p>
          If you want to see my other projects or contact me. Expand the tabs
          below.
        </p>
      </div>
      <div className={style.container}>
        <div className={style.box}>
          <h3>Technologies</h3>
          <ul>
            <li className={style.item}>
              <img src={html} /> HTML
            </li>
            <li className={style.item}>
              <img src={css} /> CSS
            </li>
            <li className={style.item}>
              <img src={js} /> JavaScript
            </li>
            <li className={style.item}>
              <img src={react} /> React
            </li>
            <li className={style.item}>
              <img src={redux} /> Redux
            </li>
            <li className={style.item}>
              <img src={git} /> Git
            </li>
          </ul>
        </div>
        <div className={style.box}>
          <h3>Projects</h3>
          <p>
            <a href="https://bgal23.github.io/projekt_HTML_CSS_grupa_03/">
              IceCream
            </a>{" "}
            (group project)
          </p>
          <p>
            <a href="https://gointoorbit.github.io/goit-project-js-group-2/">
              Bookshelf
            </a>{" "}
            (group project)
          </p>
        </div>
        <div className={style.box}>
          <h3>Contact</h3>
          <p>
            Linkedin{" "}
            <a href="https://www.linkedin.com/in/bartlomiej-gal/">
              linkedin.com/in/bartlomiej-gal
            </a>
          </p>
          <p>
            GitHub <a href="https://github.com/BGal23">github.com/BGal23</a>
          </p>
          <p>
            Telefon <a href="tel:+48788839684">788 839 684</a>
          </p>
          <p>
            Email{" "}
            <a href="mailto:bartek.gal23@gmail.com">bartek.gal23@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CreatorPage;
