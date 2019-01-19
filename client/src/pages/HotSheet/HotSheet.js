import React, {Component} from "react";
import HotSheetData from "../../components/HotSheetData/HotSheetData";
import Auxiliary from "../../hoc/Auxiliary";


class HotSheet extends Component {

    render() {
        return(
        <Auxiliary>
            <HotSheetData />
        </Auxiliary>
        )
    }
}

export default HotSheet;