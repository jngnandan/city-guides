import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-bold text-xl tracking-tight">GN</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a> 
                    </div>
                    {/* <div>
                        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                    </div> */}
                </div>
            </nav>
        )
    }
}

export default Header





    // < ul className = 'flex flex-row justify-between my-2' >
    //             <div className='flex flex-row justify-between mx-4'>
    //                 <Link className='w-32 my-3 text-red-400 font-bold text-xl' to="/">GN</Link>
    //             </div>
                

    //             <div className='flex flex-row my-3 justify-around items-center mx-4'>
    //                 <li>
    //                     <Link className='mx-3 text-md' to="/Blogs">Blogs</Link>

    //                 </li>
    //                 {/* <li>
    //                     <Link className='mx-3 text-md' to="/Login">Login</Link>
    //                 </li>
    //                 <li className='bg-red-400 rounded py-1 text-white'>
    //                     <Link className='mx-3 text-md' to="/Signup">Signup</Link>
    //                 </li> */}
    //             </div>

    //         </ >