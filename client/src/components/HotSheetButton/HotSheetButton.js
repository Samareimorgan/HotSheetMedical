import React from "react";

import classes from "./HotSheetButton.css";

const hotSheetButton = props => {
return(
    <div >
        <button className ={classes.HotSheetBtn}>Go To HotSheet  <i class="fas fa-fire"></i> </button>
    </div>
)
}

export default hotSheetButton;