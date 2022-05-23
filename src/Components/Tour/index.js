import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Tour extends Component {
  render() {
      const {tourList} = this.props
      const { tourName, tourDescription, tourImage, id} = tourList
    return (
      <Link to={`/blogs/${id}`}>
        <div className='bg-gray-100 my-3 mx-3 rounded-md'>
          <img className='rounded' src={tourImage} />
          <div className="p-3">
            <h1 className="text-xl font-semibold">{tourName}</h1>
            <p className='w-80'>{tourDescription}</p>
            <div className='flex flex-row justify-start items-center'>
              <button className='py-1 mt-3 w-80 border-gray-600 hover:border-gray-400 hover:text-gray-400 border-2 rounded'>Book</button>
            </div>
          </div>
        </div>
      </Link>
      
    )
  }
}

export default Tour