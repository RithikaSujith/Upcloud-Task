import React from "react";
import availableFilters from "./filters";
import Subfilters from "./Subfilters";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Filter ( props ) {
    // const [ filters, setFilters ] = useState(availableFilters);
    const filters = availableFilters;

    const changeFilter = (e) => {
        props.onChange(e);
    }

    return (
        <>
            { console.log(filters)}
            {filters.map( (filter) => {
                return(
                    <Subfilters item={filter} 
                        onChange={changeFilter}
                    /> 
                    
                )
            })}
        </>
    )
}

export default Filter;
