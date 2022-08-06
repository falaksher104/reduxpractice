import React from "react";
import Footer from "../components/reduxComponents/Footer";
import Main from "../components/reduxComponents/Main";
import Sidebar from "../components/reduxComponents/Sidebar";
import Topbar from "../components/reduxComponents/Topbar";

const FullReduxComponents = () => {
  return (
    <div>
      <Topbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default FullReduxComponents;
