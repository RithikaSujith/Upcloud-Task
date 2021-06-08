import React from "react";
import NavItem from "./NavItem";
import navitems from "./navbar-items";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navgroup">
                    <div className="profile-square">
                        <div className="image"></div>
                        <div className="with-me">
                            With Me                        
                            <p>DOC'S</p>
                        </div>
                        <h2>For Doctors</h2>
                    </div>
                </div>
                <div className="navgroup">
                    {navitems.map( (item) => {
                        return (<NavItem 
                            icon={item.icon}
                            name={item.name}
                        />    )
                    })}
                    <div className="profile-image"></div> 
                </div>
            </div>
        </>
    )
}

export default Navbar;