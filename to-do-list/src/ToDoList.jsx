import React from "react";
import "./ToDoList.css";

const ToDoList = (props) =>{
    return (
        <>
            <li>{props.item} 
            <span 
                class="close" 
                onClick={()=>{
                    props.onSelect(props.id)
                }}
            >&times;</span>
            
            </li>
        </>
    )
};

export default ToDoList;