import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Tour extends Component {
  render(props) {
    const { blogsData, changeTab} = this.props
    const {id, imageUrl, avatarUrl, author, content, title } = blogsData

    // const changeTaber = () => {
    //   changeTab(id)
    // }

    return (
      <Link value={id} to={`/Tour/${id}`}>
        <div className='bg-gray-100 my-3 mx-3 rounded-md h-64 w-84'>
          <img className='rounded-top h-36 w-96' src={imageUrl} />
          <div className="px-3 pt-2">
            <h1 className="text-md my-2 text-gray-600 font-semibold w-80 h-6">{title}</h1>
            <div className="flex flex-row justify-between items-between mt-4">
              <p className='text-xs text-white px-2 py-1.5 rounded-sm bg-gray-400 font-semibold'>{author}</p>
              <button className="text-xs outline outline-1 outline-offset-0.5 px-1 px-2 rounded-sm outline-gray-500 text-gray-500 font-semibold">Project Duration</button>
              <button className="text-xs outline outline-1 outline-offset-0.5 px-1 px-2 rounded-sm outline-gray-500 text-gray-500 font-semibold">Project Duration</button>
            </div>
           
            
          </div>
        </div>
      </Link>
    )
  }
}

export default Tour