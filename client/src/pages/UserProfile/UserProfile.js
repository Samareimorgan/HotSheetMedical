import React from "react"; 
import Auxiliary from "../../hoc/Auxiliary";
import ProfileHeader from "../../components/ProfileUI/ProfileHeader";

import PersonalInfo from "../../components/ProfileUI/PersonalInfo";
import MedicalInfo from "../../components/ProfileUI/MedicalInfo";



const userProfile = props => (
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
            link = "/DatabaseEdit"
            />

                <hr />
                <hr />
                <hr />
                <hr />
            
        
        </Auxiliary>


    )


export default userProfile;