import LogoBox from "../logo/LogoBox";
import { NavBarBox } from "./common/NavBarBox.styled";
import { NavBarWrapper } from "./common/NavBarWrapper.styled";
import Menu from "../menu/Menu";

const NavBar = ({ isOpen }) => {
  return (
    <NavBarWrapper style={isOpen ? { width: "20%" } : { width: "6.5%" }}>
      <NavBarBox>
        <LogoBox isOpen={isOpen} />
      </NavBarBox>
      <NavBarBox>
        {isOpen && (
          <ul>
            <li>admin</li>
            <li>admin</li>
          </ul>
        )}
      </NavBarBox>
      {isOpen && <Menu />}
    </NavBarWrapper>
  );
};

export default NavBar;
