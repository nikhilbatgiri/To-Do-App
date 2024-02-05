import React, { useState } from "react";
import './todo.css'

export default function ToDo(){
    const [todos, setTodos] = useState([]);
    const [inputActivity, setInputActivity] = useState('');

    function addActH(){
        if(inputActivity){
            setTodos([...todos,inputActivity]);
            setInputActivity('');
        }
    }

    function deleteActH(i){
        const updatedTodos = [...todos];
        updatedTodos.splice(i,1);
        setTodos(updatedTodos);
    }

    function deleteAllH(){
        setTodos([]);
    }

    return(
        <div className="App">
            <h1>To Do App</h1>
            <div className="todo-input">
                <input type="text"
                    placeholder="Enter Activity or ToDo"
                    value={inputActivity}
                    onChange={(e)=> setInputActivity(e.target.value)}/>
                <button className="buttons" onClick={addActH}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo,i)=>(
                    <li key={i}>
                        <div>
                        {todo}
                        </div>
                        <div>
                        <button onClick={()=>deleteActH(i)}>Delete</button>
                        </div>
                    </li>
                ))}
            { todos.length >=2 && <button onClick={deleteAllH}>Delete All</button> }
            </ul>
        </div>
    )
}