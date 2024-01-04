import css from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <main className={css.about}>
      <h2>Curiosity mission</h2>
      <p>
        As established by the Mars Exploration Program, the main scientific
        goals of the MSL mission are to help determine whether Mars could ever
        have supported life, as well as determining the role of water, and to
        study the climate and geology of Mars. The mission results will also
        help prepare for human exploration. To contribute to these goals, MSL
        has eight main scientific objectives:
      </p>
      <ol>
        <h3>Biological</h3>
        <li>Determine the nature and inventory of organic carbon compounds.</li>
        <li>
          Investigate the chemical building blocks of life (carbon, hydrogen,
          nitrogen, oxygen, phosphorus, and sulfur).
        </li>
        <li>
          Identify features that may represent the effects of biological
          processes (biosignatures and biomolecules).
        </li>
        <h3>Geological and geochemical</h3>
        <li>
          Investigate the chemical, isotopic, and mineralogical composition of
          the Martian surface and near-surface geological materials.
        </li>
        <li>
          Interpret the processes that have formed and modified rocks and soils.
        </li>
        <h3>Planetary process</h3>
        <li>
          Assess long-timescale (i.e., 4-billion-year) Martian atmospheric
          evolution processes.
        </li>
        <li>
          Determine present state, distribution, and cycling of water and carbon
          dioxide.
        </li>
        <h3>Surface radiation</h3>
        <li>
          Characterize the broad spectrum of surface radiation, including
          galactic and cosmic radiation, solar proton events and secondary
          neutrons. As part of its exploration, it also measured the radiation
          exposure in the interior of the spacecraft as it traveled to Mars, and
          it is continuing radiation measurements as it explores the surface of
          Mars. This data would be important for a future crewed mission.
        </li>
      </ol>
      <p>
        About one year into the surface mission, and having assessed that
        ancient Mars could have been hospitable to microbial life, the MSL
        mission objectives evolved to developing predictive models for the
        preservation process of organic compounds and biomolecules; a branch of
        paleontology called taphonomy. The region it is set to explore has been
        compared to the Four Corners region of the North American west.
      </p>
    </main>
  );
};

export default AboutPage;
