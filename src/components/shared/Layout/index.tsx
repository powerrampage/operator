import { PropsWithChildren } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Navigation />
      {/* className="flex-auto mb30 bg-white h100" */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
