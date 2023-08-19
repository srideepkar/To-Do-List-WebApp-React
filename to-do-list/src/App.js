import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () =>{

  const [InputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const ItemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    console.log(InputList);
    if (InputList === ""){
      alert("Empty Input!");
      return null;
    }
    setItems((oldItems) =>{
      return [...oldItems, InputList];
    })
    setInputList("");
  };


  const deleteItems = (id) => {      
    setItems((oldItems) => {
      return oldItems.filter((arrElem, Index)=>{
        return Index !== id;
    });
  });
  }

  return(
    <>
    
      <div className='todoList'>
        <div className='header' id='myDIV'>
          <h1><ListAltTwoToneIcon/> To-Do List</h1>
          <input 
            type = 'text'
            placeholder='Enter item name'
            id='myInput'
            value={InputList}
            onChange={ItemEvent}
          ></input>
          <input type='button' className='addBtn' value='➕ Add Item' onClick={listOfItems}/>
        </div>
        <ul id='myUL'>
            {Items.map((itemval, index) => {
              return (
                <ToDoList 
                key = {index}
                id = {index}
                item = {itemval}
                onSelect = {deleteItems}
                />
                );                
            })}
        </ul>
      </div>
    </>
    );
}

export default App;
