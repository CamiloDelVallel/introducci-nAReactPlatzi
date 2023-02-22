import React, { useContext } from "react";
import "./TodoSearch.css";
import {TodoContext} from "../TodoContext/TodoContext";


function TodoSearch(){
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValue = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            className="TodoSearch" 
            placeholder='buscar'
            value={searchValue}
            onChange={onSearchValue}
        ></input>
    )
}

export {TodoSearch};