import '../../src/Components/Todo.css'
import { useSelector,useDispatch  } from "react-redux"
import { MdDeleteForever } from "react-icons/md";
import {addTask} from '../store'
import {deleteTask} from '../store'
import { useState } from 'react';

export const Todo = () => {
    
 
    const tasks = useSelector((state) => state.task)
    const [task, setTask]=useState(""); 
    const dispatch =useDispatch();

    const handelFormSubmit =(e)=>{
        e.preventDefault();
        return dispatch(addTask(task));
    }

    const handerTaskDelete =(id)=>{
        return dispatch(deleteTask(id))
    }

    return (
        <div className="container">
            <div className="todo-app">
                <h1>To Do List</h1>
                <div className="row">
                    <i className="fa-regular fa-pen-to-square"></i>

                    <form onSubmit={handelFormSubmit }>
                        <input type="text" id="input-box" placeholder="Add a new task"  
                        value={task}
                        onChange={(e)=> setTask(e.target.value)}
                        />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        tasks.map((curretTask, index) => {
                            return <li key={index}>
                                <p>{index}: {curretTask}</p>
                                <div>
                                    <MdDeleteForever
                                        className="icon-style"
                                        onClick={() => handerTaskDelete(index)} 
                                    />

                                </div>
                            </li>
                        }
                        )
                    }

                </ul>

            </div>
        </div>

    )

}