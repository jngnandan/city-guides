import React, { Component } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export class Books extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="mx-5">
            <div className='flex flex-row justify-start items-center text-xl font-medium my-4 '>
              <Link to="/"><AiOutlineArrowLeft /></Link>
              <h1 className='pl-3 text-2xl'>Books</h1>
            </div>
            <div>
              <p className="text-xl grid sm:w-3/4">On this section we explore different books I read and share some of the summaries. I'll share some actionable learnings from each book.</p>
            </div>
            <div className="min-w-5xl">
              <div className='pt-3 grid grid-cols-2 gap-2 md:grid-cols-3'>
                <div className='bg-blue-100 col-span-2 p-8 rounded-sm'></div>
                <div className='bg-blue-100  p-8 rounded-sm'></div>
                <div className='bg-blue-100 row-span-2 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm'></div>
                <div className='bg-blue-100 p-8 rounded-sm col-span-2'></div>
              </div>
            </div>
            

          </div>
          
          <Footer />

        </div>
        
      </div>
    )
  }
}

export default Books