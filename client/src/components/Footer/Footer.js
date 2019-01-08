import React from "react";
import classes from"./Footer.css";

const footer = props => (
    <footer className = {classes.Footer}>
        <div className ={classes.FooterNavigation}>
            <ul className ={classes.FooterNavigationItems}>

                <li>{String.fromCharCode(169)} 2019 </li>    
                <li>Terms</li>  
                <li>Privacy</li>

            </ul>
    
        </div>
    </footer>
);

export default footer; 