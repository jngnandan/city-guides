import React, { Component } from 'react'

const blogsData = {
    title: 'Blog Name',
    imageUrl: 'http://unsplash.it/400/200?random&gravity=center',
    avatarUrl: 'http://unsplash.it/400/200?random&gravity=center',
    author: 'Author Name',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
}

export class TourDetails extends Component {
  state = {
    blogsData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getBlogItemData()
  }
  getBlogItemData = async () => {
  const {match} = this.props
  const {id} = match.params
  console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content
    }
    this.setState({
      blogsData: updatedData,
      isLoading: true,
    })
  }

  render() {
    const {blogsData, isLoading} = this.state
    const { title, imageUrl, avatarUrl, author, content, topic } = blogsData
  
    return (
      <div className='flex flex-col justify-center items-center p-4'>
        <img className='w-2/3 h-min' src={imageUrl}/>
        <div className='w-2/3'>
          <h1 className='text-3xl pt-4 text-semibold'>{title}</h1>
          <p className='py-2 font-italic'>{author}</p>
          <p className='text-sm py-3'>{content}</p>
        </div>
      </div>
    )
  }
}

export default TourDetails