import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../components/container/Container.styled";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navBar/NavBar";

const SharedLayout = () => {
  const [isOpen, setIsopen] = useState(true);

  const openCloseNavBar = () => {
    setIsopen(!isOpen);
  };
  return (
    <div style={{ display: "flex" }}>
      <NavBar openNavBar={openCloseNavBar} isOpen={isOpen} />
      <Container>
        <Header openNavBar={openCloseNavBar} />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </div>
  );
};

export default SharedLayout;
