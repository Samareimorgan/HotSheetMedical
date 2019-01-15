import React from "react"; 
import Auxiliary from "../../hoc/Auxiliary";
import ProfileHeader from "../../components/ProfileUI/ProfileHeader";
import classes from "../UserProfile/UserProfile.css";
import PersonalInfo from "../../components/ProfileUI/PersonalInfo";
import MedicalInfo from "../../components/ProfileUI/MedicalInfo";


const userProfile = (props) => {
    

 
    return (
        <Auxiliary>
            <ProfileHeader name = "Samantha Johnston"  />
            <PersonalInfo 
            email = "samareimorgan@gmail.com"
            birthdate = "06-06-1977"  
            address = "123 Main Street, Denver, CO 80236"
            phone = "720-398-7174" 
            />
            <MedicalInfo
            docname = "Dr. Whatsit"
            doccompany = "Amazing Medical Co"
            docaddress = "234 Main St, Denver, CO 80023"
            docphone = "303-249-3245"
            allergies = "sulfa, penicillin "
            medicationslist = "vitamin B12, Lipitor"
            />


            
        
        </Auxiliary>


       

    )
}

export default userProfile;