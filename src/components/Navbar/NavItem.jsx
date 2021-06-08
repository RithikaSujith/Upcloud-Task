import React from "react";
import {BsSearch} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {IoIosNotifications} from "react-icons/io";

function NavItem(props) {

    return (
        <>
            <div className="navitem">
                {
                    props.name === "Search & Book" ?
                    <BsSearch style={{ color: 'black', height: '20px', width: '20px' }}/> :
                        props.name === "Nearby" ? 
                        <GoLocation style={{ color: 'black', height: '20px', width: '20px' }} /> :
                        <IoIosNotifications style={{ color: 'black', height: '20px', width: '20px' }} />
                    
                }

                <span className="navlink">{props.name}</span> 

            </div>
        </>
    )
}

export default NavItem;