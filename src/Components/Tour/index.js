import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Tour extends Component {
  render(props) {
    const { blogsData, changeTab } = this.props
    const { id, imageUrl, avatarUrl, author, content, title } = blogsData

    // const changeTaber = () => {
    //   changeTab(id)
    // }

    return (
      <Link value={id} to={`/Tour/${id}`}>
        <div className=''>
          <div className='bg-gray-100 my-3 mx-3 rounded-sm'>
            <img className='rounded-top' src={imageUrl} />
            <div className="px-3 pt-2">
              <h1 className="text-sm span-y-2 text-gray-600 font-semibold">{title}</h1>
              <div className="flex">
                <p className='text-xs text-white px-2 my-3 py-1 rounded-sm bg-gray-400 font-semibold'>{author}</p>
                {/* <button className="text-xs outline outline-1 outline-offset-0.5 px-1 px-2 rounded-sm outline-gray-500 text-gray-500 font-semibold">Project Duration</button>
              <button className="text-xs outline outline-1 outline-offset-0.5 px-1 px-2 rounded-sm outline-gray-500 text-gray-500 font-semibold">Project Duration</button> */}
              </div>
            </div>
          </div>
        </div>

       
      </Link>
    )
  }
}

export default Tour