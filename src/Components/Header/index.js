import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    state ={
        isOpen: false
    }

    openMenu = () => {
        console.log(this.state.isOpen)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        
        return (
            <nav class="flex items-center justify-between flex-wrap bg-purple-900 p-6">
                <Link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-bold text-xl tracking-tight">GN</span>
                </Link>
                <div class="">
                    <button onClick={this.openMenu} class="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full flex flex-col">
                    {this.state.isOpen ? 
                        <div class="text-sm lg:flex-grow">
                            <Link onClick={this.openMenu} to="/about" href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                                About
                            </Link>
                            <Link onClick={this.openMenu} to="/blogs" href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                                Blogs
                            </Link>
                            <Link onClick={this.openMenu} to="/books" href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                                Book Summaries
                            </Link>
                            
                        </div> :
                        <div></div>
                }
                    
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