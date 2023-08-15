import './App.css';

const App = () =>{
  return(
    <>
      <div className='todoList'>
        <div className='header' id='myDIV'>
          <h1>To-Do List</h1>
          <input 
            type = 'text'
            placeholder='Enter item name'
            id='myInput'
          ></input>        
          <input type='button' className='addBtn' value='➕ Add Item'/>
        </div>
        <ul id='myUL'>
          <li>
          
          </li>
        </ul>
      </div>
    </>
    );
}

export default App;
