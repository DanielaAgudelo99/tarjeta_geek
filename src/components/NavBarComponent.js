import React from 'react'
import Logo from '../images/logo-ag-min.png'
import '../styles/NavBarStyles.css'

class NavBar extends React.Component{
    render(){
        return(
<div className="Navbar">
        <div className="container-fluid">
            <a className="Navbar__brand" href="/">
                <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                <h4 className="font-weight-light">Conferencia</h4>
                <h4 className="font-weight-bold">Geek</h4>
            </a> 
        </div>
    </div>
        )
        
    }
}

export default NavBar;

