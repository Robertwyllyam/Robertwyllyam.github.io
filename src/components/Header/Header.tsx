import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

import SpreadIcon from "../../assets/spread.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <CHeader>
      <CContainer fluid>
        <CNavLink href="/" active>
          <Link style={{ textDecoration: "none" }} to="/">
            <CHeaderBrand href="#">
              <img width={80} src={SpreadIcon}></img>
              Spread IA
            </CHeaderBrand>
          </Link>
        </CNavLink>
        <CHeaderNav>
          <CNavItem>
            <Link className="text-decoration-none" to='/'>
              <CNavLink  active>
                Home
              </CNavLink>
            </Link>
          </CNavItem>
          <CNavItem>
            <Link className="text-decoration-none" to='/about'>
            <CNavLink active>
              Sobre
            </CNavLink>
            </Link>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default Header;
