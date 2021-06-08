import React, {useState} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {BsFilterLeft, BsSearch} from "react-icons/bs";
import {FaFilter} from "react-icons/fa";
import {BiCurrentLocation} from "react-icons/bi";

function Menu(props){
    const [ searchText, setSearchText ] = useState("Search");
    const [ isSearching, setIsSearching ] = useState(false);

    const handleFilterClick = () => {
        props.changeMenu();
    }

    return (
        <>
            <div className="menu">
                <div className="sidebar-title">
                    <IoIosArrowBack style={{ color: 'black', height: '30px', width: '30px' }} />
                    <h2>{props.title}</h2>
                </div>
                <div className="search-menu">
                    <div className="search-bar">
                        <BsSearch style={{ color: 'black', height: '15px', width: '15px', margin: "0 10px 0 0" }}/>
                        {searchText}
                    </div>
                    <BsFilterLeft style={{ color: 'black', height: '30px', width: '30px' }} />
                    <FaFilter 
                        style={{ color: 'black', height: '30px', width: '30px' }} 
                        onClick={ handleFilterClick }
                    />
                </div>
                <div className="location">
                    <BiCurrentLocation style={{ color: 'black', height: '15px', width: '15px', margin: "0 8px 0 7px" }}/>
                    Current Location
                </div>
            </div>
        </>
    )
}

export default Menu;