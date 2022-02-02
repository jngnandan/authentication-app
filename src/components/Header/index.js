//Header
import React from 'react';
import { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div className='flex flex-row justify-between items-center my-2 mx-20'>
                <div className='flex flex-row justify-between items-center'>
                    <img className='w-12 mr-1' src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" />
                    <h1 className='text-xl font-bold'>Wave</h1>
                </div>

                <nav>
                    <ul className='flex flex-row justify-center items-center'>
                        <li>
                            <Link className='px-3' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='px-3' to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className='px-3' to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link className='px-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded' to="/login">Login</Link>
                        </li>
                    </ul>

                </nav>

                {/* <div className='flex flex-row justify-around items-center'>
                    <li>
                        <Link className='px-4' to="/" >Home</Link>
                    </li>
                    <li>
                        <Link className='px-4' to="/about" >About</Link>
                    </li>
                    <li>
                        <Link className='px-4' to="/contact" >Contact</Link>
                    </li>
                </div> */}

            </div>
        )
    }
}

export default Header