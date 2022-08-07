
import React, { Component } from 'react'
import css from '..//Home/index.css'
import { v4 as uuidv4 } from 'uuid'
import Tour from '../Tour'
import Tab from '../Tab'
import { Oval } from 'react-loader-spinner';
import TourDetails from '../TourDetails'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Illustrations from '../Illustrations'
import Footer from '../Footer'

const tabList = [
    {
        tabId: uuidv4(),
        tabName: 'Product Design',
        category: 'Product Design',
    },
    {
        tabId: uuidv4(),
        tabName: 'Web Development',
        category: 'Web Development',
    },
    // {
    //     tabId: uuidv4(),
    //     tabName: 'Illustration',
    //     category: 'Illustration',
    // },
]

const tourList = [
    {
        id: uuidv4(),
        tourName: 'Tour 1',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200?random&gravity=center',
        tourLocation: 'New York',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'Students',
    },
    {
        id: uuidv4(),
        tourName: 'Tour 2',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200',
        tourLocation: 'Bournemouth',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'Students',
    },
    {
        id: uuidv4(),
        tourName: 'Tour 3',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200',
        tourLocation: 'Bournemouth',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'Students',
    },
    {
        id: uuidv4(),
        tourName: 'Tour 4',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200?random&gravity=center',
        tourLocation: 'New York',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'Visitors',
    },
    {
        id: uuidv4(),
        tourName: 'Tour 5',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200',
        tourLocation: 'Bournemouth',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'New Movers',
    },
    {
        id: uuidv4(),
        tourName: 'Tour 6',
        tourDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
        tourPrice: '$100',
        tourImage: 'http://unsplash.it/400/200?random&gravity=center',
        tourLocation: 'New York',
        tourSalePrice: '$90',
        tourSaleEnd: '10/10/2020',
        tourSaleStart: '10/10/2020',
        category: 'New Movers',
    },

]

// const BlogsData = {
//     title: 'Blog Name',
//     imageUrl: 'http://unsplash.it/400/200?random&gravity=center',
//     avatarUrl: 'http://unsplash.it/400/200?random&gravity=center',
//     author: 'Author Name',
//     content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus possimus.',
// }

export class Home extends Component {
    state = {
        currentTab: tabList[0].category,
        blogsData: [],
        isLoading: true,
    }

    changeTab = (category) => {
        this.setState({ currentTab: category })
    }

    componentDidMount(){
        this.getBlogsData()
    }

    getBlogsData = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs')
        const data = await response.json()
        // console.log(data)

        const formattedData = data.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.title,
            imageUrl: eachItem.image_url,
            avatarUrl: eachItem.avatar_url,
            author: eachItem.author,
            topic: eachItem.topic,
        }))
        this.setState({blogsData: formattedData, isLoading: false})
        // console.log(this.state.blogsData)
    }

    render(props) {
        const { currentTab, isLoading, blogsData } = this.state
        // const tourCategory = tourList.filter(eachitem => eachitem.category === currentTab)
        // console.log(isLoading)

        return (
            <div>
                {/* Page */}
                <div className="mx-5 grid grid-col-12">
                    <div className="my-3 mt-5 grid-span-8">
                        <h1 className="text-4xl text-gray-700 font-bold">Hi! Friends👋 </h1>
                        <p className="text-3xl pt-2">I'm Nandan, I'm <span className="text-gray-600 underline">UX Designer</span> and <span className="text-gray-500 underline">Front Developer</span></p>
                        <p className="text-xl pt-3">On this site we explore different processes in UX and best practices in Development and some side projects I do. I share weekly newsletters for in various tech topics. Signup below in the community of friendly readers.</p>
                    </div>

                    {/* Subscribe */}
                    <div className=''>
                        <form className="flex flex-row justify-start items-center mt-2 mb-5 pl-2">
                            <div className="outline outline-1 rounded-sm outline-gray-900 flex flex-row justify-between items-center">
                                <input className="pl-2" placeholder="Enter your Email" />
                                <button className="py-1.5 hover:bg-purple-600 font-medium bg-purple-900 px-2 rounded-sm text-white">Subscribe</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        {/* Tabs */}
                        <div className='flex flex-row justify-center items-center my-4'>
                            {tabList.map(eachitem => (
                                <Tab isActive={eachitem.category === currentTab} changeTab={this.changeTab} tabList={eachitem} />
                            ))}
                        </div>

                        <h1 className='text-xl font-medium my-3'>Projects</h1>

                        {/* Spinner Blogs*/}
                        <div>
                            {isLoading ? (
                                // <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                                <div className="loader flex flex-row justify-center items-center h-50">
                                    <Oval
                                        type="Circles"
                                        color="#dc1c2c"
                                        height={50}
                                        width={100}
                                    //timeout={1000} //3 secs
                                    />
                                </div>
                            ) : (
                                // blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
                                <div className='grid gap-1 grid-cols-2 gap-1 md:grid-cols-3 lg: grid-cols-4'>
                                    {blogsData.map(eachitem => (
                                        <Tour blogsData={eachitem} key={eachitem.id} />
                                    ))}
                                </div>
                            )}

                        </div>

                        <div className="">
                            <h1 className='text-3xl font-bold my-3'>Explore</h1>
                            {/* Blogs */}
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 md:gap-8'>
                                <Link to="/books" className="flex flex-row justify-start items-center align-items bg-gray-100 p-4 mt-4">
                                    <h1 className="text-4xl px-4">📚</h1>
                                    <div>
                                        <h1 className="text-md font-bold text-sm">Book Summaries & Notes</h1>
                                        <p>High lights & Notes from some of my faviourite books.</p>
                                    </div>
                                </Link>
                                {/* Books */}
                                <Link to="/blogs" className="flex flex-row justify-start items-center align-items bg-gray-100 p-4 mt-4">
                                    <h1 className="text-4xl px-4">👨‍💻</h1>
                                    <div>
                                        <h1 className="text-md font-bold text-sm">Tech Blogs</h1>
                                        <p>High lights & Notes from some of my faviourite books.</p>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>

                        <h1 className='text-3xl font-bold my-3 pt-6'>Latest Articles</h1>

                        

                      

                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default Home