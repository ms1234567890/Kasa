import React, { useState } from "react";
import '../assets/css/Dropdown.css'
import Down from "../assets/images/Down.png"

function Dropdown({titre, description}) {
    /* Crée un Hook d'état */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <span className={`arrow-dropdown ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={Down} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                ouvert && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;
