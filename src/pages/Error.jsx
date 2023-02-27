import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/Error.css'
import Error from "../components/Error";
import Header from "../components/Header";


function PageNotFound() {
    return (
        <div className="Home">
            <Header />
            <Error />
        </div>
    )
}

export default PageNotFound
