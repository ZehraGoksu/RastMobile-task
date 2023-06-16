import React from "react";
import Navbar from "./components/Navbar"; 

const Layout = ({children}) => {
  return (
    <div>
      <title>Rast Mobile</title>
      <div className="container-fluid px-0">
        <nav className="mx-3">
          <Navbar /> 
        </nav>
        <section className="mx-4">
          {children}
        </section>
      </div>
      <footer> 

      </footer>
    </div>
  );
};

export default Layout;
