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
        <div className='bg-gray-100 my-3 mx-3 rounded-md h-72'>
          <img className='rounded-top h-40 w-96' src={imageUrl} />
          <div className="px-3 pt-2">
            <h1 className="text-xl font-semibold w-80 h-16">{title}</h1>
            <p className='w-80'>{content}</p>
            <p className='pt-3'>{author}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Tour