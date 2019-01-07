import React from "react";
import "./Footer.css";

const footer = props => (
    <footer className = "footer">
        <div className ="footer-navigation">
            <ul className = "footer-navigation-items">

                <li>{String.fromCharCode(169)} 2019 </li>    
                <li>Terms</li>  
                <li>Privacy</li>

            </ul>
    
        </div>
    </footer>
);

export default footer; 