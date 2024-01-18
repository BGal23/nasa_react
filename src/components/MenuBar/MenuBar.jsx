import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import css from "./MenuBar.module.css";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #fc3d21;
  }
`;

const MenuBar = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.menu}>
            <div>mars</div>
            <div className={css.navigation}>
              <StyledLink className={css.link} to="/">
                Home
              </StyledLink>
              <StyledLink className={css.link} to="/gallery">
                Gallery
              </StyledLink>
              <StyledLink className={css.link} to="/creator">
                Creator
              </StyledLink>
            </div>
          </div>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <main className={css.container}>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default MenuBar;
