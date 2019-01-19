import React from "react";

import classes from "./HotSheetButton.css";

const hotSheetButton = props => {
return(
    <div >
       <a href = {props.link}><button className ={classes.HotSheetBtn}>Go To HotSheet  <i class="fas fa-fire"></i> </button> </a> 
    </div>
)
}

export default hotSheetButton;