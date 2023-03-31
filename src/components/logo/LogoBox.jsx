import { Logo } from "./common/Logo.styled";
import { LogoBoxStyle } from "./common/LogoWrapper.styled";

const LogoBox = ({ isOpen, bigNavBar }) => {
  return (
    <LogoBoxStyle>
      <Logo to={"/"}>
        <img
          src="http://shop.lockit.com.ua/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          height={33}
        />
        <h3
          style={
            isOpen === bigNavBar
              ? { width: "180px", opacity: "1" }
              : { opacity: "0" }
          }
        >
          AdminLTE 3
        </h3>
      </Logo>
    </LogoBoxStyle>
  );
};
export default LogoBox;
