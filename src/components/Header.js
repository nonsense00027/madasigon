import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 60 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div
      className={`fixed top-0 z-50 bg-white w-full h-20 my-auto mx-auto transition-all duration-200 ${
        isScrolled && "shadow-md border-b border-gray-100"
      }`}
    >
      <div className="h-full max-w-screen-lg flex items-center my-auto mx-auto">
        <h1
          className="font-bold text-3xl pr-32 cursor-pointer"
          onClick={() => history.push("/")}
        >
          MADASIGON
        </h1>
        <div className="flex items-center space-x-8">
          <p>HOME</p>
          <p onClick={() => history.push("/locate")}>LOCATE SHOPS</p>
          <p>THE TEAM</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
