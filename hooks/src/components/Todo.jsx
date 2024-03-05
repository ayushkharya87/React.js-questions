import React, { useReducer, useState } from 'react';

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, {id: Date.now(), text: action.payload, completed: false}]
        case "REMOVE":
            return state.filter((e) => e.id !== action.payload);
        case "TOGGLE_TASK":
            return state.map((e) => e.id === action.payload ? {...e, completed: !e.completed} : e)
        default:
            return state;
    }
}

const Todo = () => {

    // const [state, dispatch ] =useReducer(reducer, initialState);
    const [tasks, dispatch ] = useReducer(taskReducer, []);
    const [task, setTask] = useState("");

    const addTask = () => {
        dispatch({type: "ADD_TASK", payload: task})
    };

  return (
    <div>
        <h1>ToDo using "useReducer"</h1>

        <input type="text" placeholder='enter new tasks...' onChange={(e) => setTask(e.target.value)} value={task}/>
        <button onClick={addTask}>Add</button>

        <ul>
            {
                tasks.map((e) => (
                    <li key={e.id}>
                        <span style={{textDecoration: e.completed ? "line-through" : "none"}} onClick={() => dispatch({type: "TOGGLE_TASK", payload: e.id})}>{e.text}</span>
                        <button onClick={() => dispatch({type: "REMOVE", payload: e.id})}>Remove</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo