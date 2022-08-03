import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <ul className='flex flex-row justify-between my-2'>
                <div className='flex flex-row justify-between mx-4'>
                    <Link className='w-32 my-3 text-red-400 font-bold text-xl' to="/">GN</Link>
                </div>
                

                <div className='flex flex-row my-3 justify-around items-center mx-4'>
                    <li>
                        <Link className='mx-3 text-md' to="/Blogs">Blogs</Link>

                    </li>
                    {/* <li>
                        <Link className='mx-3 text-md' to="/Login">Login</Link>
                    </li>
                    <li className='bg-red-400 rounded py-1 text-white'>
                        <Link className='mx-3 text-md' to="/Signup">Signup</Link>
                    </li> */}
                </div>

            </ul>
        )
    }
}

export default Header