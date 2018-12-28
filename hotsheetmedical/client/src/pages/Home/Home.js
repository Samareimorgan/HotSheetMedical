import React, {Component} from "react";
import API from "../../utils/API";
import EmergencyButton from "../../components/EmergencyButton";

class Home extends Component {

render() {

    return ( <div>
      < EmergencyButton ></EmergencyButton>
      < EmergencyButton ></EmergencyButton>
      < EmergencyButton ></EmergencyButton>
      < EmergencyButton ></EmergencyButton>
      < EmergencyButton ></EmergencyButton>
    
        
        </div>
        );
    }
}

export default Home;