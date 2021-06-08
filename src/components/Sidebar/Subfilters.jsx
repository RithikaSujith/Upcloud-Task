import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Subfilters( props ) {

    const [ active, setActive ] = useState(false);

    const handleActiveClick = () => {
        setActive(!active);
    }

    const handleToggleFilter = (e) => {
        // console.log(e.target.innerText);
        props.onChange(e.target.id);
    }

    return ( 
        <>
            <div className="filter-group" onClick={handleActiveClick}>
                <div className="filter-title">
                    <p>{props.item.title}</p>
                    {   !active ? 
                            <IoIosArrowDown 
                                style={{ color: 'black', height: '20px', marginRight: "10px"}}
                            /> :
                            <IoIosArrowUp 
                                style={{ color: 'black', height: '20px', marginRight: "10px"}}
                            />  
                    }
                </div>
            </div>
            <div className="filter-submenu">
                {active ? 
                    props.item.options.map( (option) => {
                        return (
                            <div 
                                className="filter-choice"
                                id={option.choice}
                                onClick={handleToggleFilter}
                            >
                                <p id={option.choice}>{option.choice}</p>
                                <div 
                                    className="check-box"
                                    id={option.choice}
                                >
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
                    
        </>
    )
}

export default Subfilters;