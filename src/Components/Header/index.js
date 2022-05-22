import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <ul className='flex flex-row justify-between my-2'>
                <div className='flex flex-row justify-between mx-4'>
                    <Link className='w-14' to="/">Home</Link>
                </div>
                <div className='flex flex-row'>
                    <li>
                        <Link className='mx-2' to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link className='mx-2' to="/Signup">Signup</Link>
                    </li>
                </div>

            </ul>
        )
    }
}

export default Header