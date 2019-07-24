import React from 'react'
import Profile from '../components/ProfileComponent'
import NavBar from '../components/NavBarComponent'
import ProfileForm from '../components/ProfileFormComponent'
import '../styles/ProfileNewStyle.css'
class ProfileNew extends React.Component{
   render(){
       return(
           <div>
               <NavBar/>
               <div className="ProfileNew__hero">
                   <span className="ProfileNew__hero-text">
                       "Bienvenido a la conferencia Geek! ,
                       esperemos todas nuestras charlas sean de tu
                       total agradado"
                   </span>
               </div>
               <div className="container">
                   <div className="row">
                        <div className="col-6">
                        <Profile
                    firstName= 'Daniela'
                    lastName = 'Isaza Agudelo'
                    twitter = 'isazagudelo'
                    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                    />
                        </div>
                        <div className="col-6">
                        <ProfileForm/>
                        </div>
                   </div>
                   
               </div>
           </div>
       );
   }
}
export default ProfileNew;