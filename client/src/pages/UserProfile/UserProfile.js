import React from "react"; 
import Auxiliary from "../../hoc/Auxiliary";
import UserMedication from "../../Containers/UserMedication/UserMedication";

const userProfile = (props) => {
    return (
        <Auxiliary>
            <UserMedication />
        </Auxiliary>

    )
}

export default userProfile;