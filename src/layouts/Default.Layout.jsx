import React from "react";
import Navbar from "../Components/Navbar/Navbar.Component";


const DefaultLayout = (props) => {

    return(
        <>
          <Navbar/>
          {props.children}
          <div>Footer</div>
        </>
    );
};

export default DefaultLayout;