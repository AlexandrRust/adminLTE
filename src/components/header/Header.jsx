import { Burger } from "./common/Burger.styled";
import { HeaderBox } from "./common/HeaderBox.styled";
import { HeaderTitle } from "./common/HeaderTitle.styled";

const Header = ({ openNavBar, isOpen }) => {
  return (
    <HeaderBox>
      <Burger onClick={openNavBar} />
      <HeaderTitle>Home</HeaderTitle>
    </HeaderBox>
  );
};
export default Header;
