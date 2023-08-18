import React from "react";
import "./ToDoList.css";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

const ToDoList = (props) =>{
    return (
        <>
            <li>{props.item} 
            <CancelTwoToneIcon
                class="close" 
                onClick={()=>{
                    props.onSelect(props.id)
                }}
            />            
            </li>
        </>
    )
};

export default ToDoList;