import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <select className='findd'>
                        <option>Find Designers</option>
                        <option>Designers Search</option>
                        <option>Post a Job</option>
                    </select>
                </li>
                <li>
                    <a href='#'>Inspiration</a>
                </li>
                <li>
                    <a href='#'>Jobs</a>
                </li>
                <li>
                    <a href='#'>Go Pro</a>
                </li>
            </ul>
    </nav>
    )
}

export default Nav
