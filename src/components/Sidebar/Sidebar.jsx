import React, { useState } from "react";
import Menu from "./Menu";
import Card from "./Card";
import Filter from "./Filter";
import doctors from "./doctors";

function Sidebar() {
    
    const [ isFiltering, setIsFiltering ] = useState(false);
    const [ filter, setFilter ] = useState({
        "Monday": false,
        "Tuesday": false,
        "Wednesday": false, 
        "Thursday": false,
        "Friday": false,
        "Saturday": false,
        "Sunday": false,
        "Allergy and immunology": false,
        "Diagnostic radiology": false,
        "Nuclear medicine": false,
        "Surgery": false,
        "<500": false,
        "<1000": false,
        ">1000": false,
        "Male": false,
        "Female": false
    })

    const changeMenu = () => {
        setIsFiltering(!isFiltering);
        console.log(isFiltering);
    }

    const updateFilter = (e) => {
        console.log(e)
        console.log(filter[e])
        let name = e;
        let value = filter[e];
        setFilter( prevState => ({
                ...prevState,
                [name]: !value
            }));
    }

    // const applyFilter = (doctor) => {
    //     let filterKeys = Object.keys(filter);
        
    // }
    
    return (
        <>
            <div className="sidebar">
                <Menu changeMenu={changeMenu} 
                    title={!isFiltering ? "Near By": "Filters"}
                />
                {!isFiltering ? doctors.map( (doctor) => {
                    return (
                        <Card 
                            name={doctor.name}
                            distance={doctor.distance}
                            specialization={doctor.specialization}
                            rating={doctor.rating}
                            hospital={doctor.hospital}
                            rate={doctor.rate}
                        />
                    )
                    }): <Filter 
                            onChange={updateFilter}
                        />
                }
            </div>
        </>
    )
}

export default Sidebar;