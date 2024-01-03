import css from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <main className={css.about}>
      <h3>Mission history</h3>
      <p>
        The NASA Mars Science Laboratory mission with its rover named Curiosity,
        was launched on November 26, 2011, and landed on Mars on August 6, 2012,
        on Aeolis Palus in Gale Crater. The rover carries instruments designed
        to look for past or present conditions relevant to the past or present
        habitability of Mars.
      </p>
    </main>
  );
};

export default AboutPage;
