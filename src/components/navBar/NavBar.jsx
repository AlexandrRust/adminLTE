import LogoBox from "../logo/LogoBox";
import { NavBarBox } from "./common/NavBarBox.styled";
import { NavBarWrapper } from "./common/NavBarWrapper.styled";
import Menu from "../menu/Menu";
import { useEffect, useState } from "react";

const NavBar = ({ isOpen }) => {
  const [widthNavBar, setWidthNavBar] = useState("");
  const bigNavBar = "250px";
  const smallNavBar = "4.6rem";

  useEffect(() => {
    if (isOpen) {
      setWidthNavBar(bigNavBar);
    } else {
      setWidthNavBar(smallNavBar);
    }
  }, [isOpen]);
  const onMouseEnter = () => {
    setWidthNavBar(bigNavBar);
  };
  const onMouseLeave = () => {
    if (isOpen) {
      return;
    } else {
      setWidthNavBar(smallNavBar);
    }
  };

  return (
    <NavBarWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      width={widthNavBar}
    >
      <NavBarBox>
        <LogoBox isOpen={widthNavBar} bigNavBar={bigNavBar} />
      </NavBarBox>
      <NavBarBox>
        {widthNavBar === bigNavBar && (
          <ul>
            <li>admin</li>
            <li>admin</li>
          </ul>
        )}
      </NavBarBox>
      {widthNavBar === bigNavBar && <Menu />}
    </NavBarWrapper>
  );
};

export default NavBar;
