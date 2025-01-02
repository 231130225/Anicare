import React from 'react';
import "./Filter.css"

const Filter = () => {
    return (
        <nav className='filter-s'>
            <ul>
                <li>
                    <p className='pop'>Popular</p>
                </li>
                <li>
                    <div>
                        <ul>
                            <li>
                                <a href="#"><span>Discover</span></a>
                            </li>
                            <li>
                                <a href="#">Animation</a>
                            </li>
                            <li>
                                <a href="#">Branding</a>
                            </li>
                            <li>
                                <a href="#">Illustration</a>
                            </li>
                            <li>
                                <a href="#">Mobile</a>
                            </li>
                            <li>
                                <a href="#">Print</a>
                            </li>
                            <li>
                                <a href="#">Product Design</a>
                            </li>
                            <li>
                                <a href="#">Typography</a>
                            </li>
                            <li>
                                <a href="#">Web Design</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <p className='fil'>Filters</p>
                </li>
            </ul>
        </nav>
    )
}

export default Filter;