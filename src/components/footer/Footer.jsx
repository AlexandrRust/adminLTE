import { FooterStyle } from "./FooterStyle.styled";

const Footer = () => {
  return (
    <FooterStyle>
      <p style={{ marginLeft: "8px" }}>
        Copyright © 2011-2022
        <a
          href="http://lockIt.com.ua"
          style={{ textDecoration: "none", color: "#007bff" }}
        >

          LockIt.com.ua.
        </a>
        All rights reserved.
      </p>
      <p style={{ marginRight: "8px" }}>
        Version <span style={{ fontWeight: "400" }}>1.0.5</span>
      </p>
    </FooterStyle>
  );
};

export default Footer;
