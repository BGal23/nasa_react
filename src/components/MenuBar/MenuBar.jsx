import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import css from "./MenuBar.module.css";

const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #fc3d21;
  }
`;

const MenuBar = () => {
  return (
    <>
      <header className={css.menu}>
        <div>mars</div>
        <div className={css.navigation}>
          <StyledLink className={css.link} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/about">
            About
          </StyledLink>
          <StyledLink className={css.link} to="/gallery">
            Gallery
          </StyledLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default MenuBar;
