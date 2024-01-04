import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        This website was created while learning React. All information on this
        page is copied from Wikipedia or was generated by ChatGPT.
      </p>
    </footer>
  );
};

export default Footer;
