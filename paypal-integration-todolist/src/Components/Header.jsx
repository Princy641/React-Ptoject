import React from 'react'
import '../../src/Components/Header.css'
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header">Header</div>
                <div className="button-group">
                <Link to="/stopwatch"><button>StopWatch</button></Link>
                <Link to="/paypal"><button>PayPal</button></Link>
                <Link to="/todo"><button>ToDoList</button></Link> 
                </div>
            </div>

        </>


    )
}
