import { PropsWithChildren } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
