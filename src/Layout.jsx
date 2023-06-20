import React from "react";
import Navbar from "./components/layout/Navbar"; 

const Layout = ({children}) => {
  return (
    <div>
    {/* Layout içerisine navbar footer eklenmiştir, değişecek içerik için children alanı tanımlanmıştır */}
      <title>Rast Mobile</title>
      <div className="container-fluid px-0">
        <nav className="mx-5">
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
