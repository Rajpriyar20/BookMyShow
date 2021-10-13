import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";

function HomePage(){
    return(
        <div>HomePage</div>
    );
};


function ContactPage(){
    return(
        <div>Contact Page</div>
    );
};

function App() {
    return ( 
    <>
       <DefaultHOC path="/" exact component={HomePage}/>
       <DefaultHOC path="/Contact" exact component={ContactPage}/>
    </>
    );
}

export default App;