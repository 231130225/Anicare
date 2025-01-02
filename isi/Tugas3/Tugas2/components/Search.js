import React from 'react'
import "./Search.css"
import { Link } from 'react-router-dom'

const Search = () => {
    
    return (
        <nav>
            <ul>
                <li>
                    <input className='search' placeholder=' Search'></input>
                </li>
                <li>
                    <Link to="/signin">Log in</Link>
                </li>
                <li>
                    <Link to="/signup" className='sign'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Search