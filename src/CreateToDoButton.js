import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(){
    const onClickButton = (msg)=>{
        alert(msg)
    }
    return(
        <button
         className="CreateTodoButton"
         onClick={()=>{onClickButton('Acá va el nuevo nodo')}}
         >
            +
        </button>
    )
}

export {CreateTodoButton};