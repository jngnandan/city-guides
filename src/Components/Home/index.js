
import React, { Component } from 'react'
import css from '..//Home/index.css'
import { v4 as uuidv4 } from 'uuid'
import Tour from '../Tour'
import Tab from '../Tab'
import { Oval } from 'react-loader-spinner';

const tabList = [
    {
        tabId: uuidv4(),
        tabName: 'Students',
        category: 'Students',
    },
    {
        tabId: uuidv4(),
        tabName: 'Visitors',
        category: 'Visitors',
    },
    {
        tabId: uuidv4(),
        tabName: 'New Movers',
        category: 'New Movers',
    },
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
        tourName: 'Tour 1',
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
        tourName: 'Tour 3',
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
        tourName: 'Tour 1',
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

export class Home extends Component {
    state = {
        currentTab: tabList[0].category,
        isLoading: true,
        blogsData: '',
    }

    changeTab = (category) => {
        this.setState({ currentTab: category })
        // console.log(category
    }

    componentDidMount(){
        this.getBlogsData()
    }
    getBlogsData = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs')
        const data = await response.json()
        console.log(data)

        const formattedData = data.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.title,
            imageUrl: eachItem.image_url,
            avatarUrl: eachItem.avatar_url,
            author: eachItem.author,
            topic: eachItem.topic,
        }))
        this.setState({blogsData: formattedData, isLoading: false})
    }

    render(props) {
        const { currentTab, isLoading, blogsData } = this.state
        const tourCategory = tourList.filter(eachitem => eachitem.category === currentTab)
        console.log(isLoading)

        return (
            <div>
                {/* Header */}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="http://unsplash.it/1200/400?gravity=center" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://loremflickr.com/1200/400/Beach" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://lorempixel.com/1200/400/nature" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div>
                    <div className='flex flex-row justify-center items-center my-4'>
                        {tabList.map(eachitem => (
                            <Tab isActive={eachitem.category === currentTab} changeTab={this.changeTab} tabList={eachitem} />
                        ))}
                    </div>

                    <h1 className='text-xl font-medium mx-5 my-3'>Guides</h1>
                    
                    {/* Spinner */}
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
                                <div className='flex flex-wrap mx-4'>
                                    {tourCategory.map(eachitem => (
                                        <Tour tourList={eachitem} key={eachitem.id} />
                                    ))}
                                </div>
                        )}

                    </div>

                    
                </div>

                <div>

                    <div className='bg-black h-52'>
                        <div className='text-white flex flex-row justify-around items-start m-12 pt-12'>
                            <ul className='mr-12 pt-1'>
                                <li className='text-red-500 text-xl font-bold'>City Guides</li>
                            </ul>
                            
                            <ul className='mr-8'>
                                <li className='py-2 text-sm'>About</li>
                                <li className='py-2 text-sm'>Privacy</li>
                                <li className='py-2 text-sm'>Terms & Conditions</li>
                            </ul>

                            <ul className='mr-8'>
                                <li className='py-2 text-sm'>Compliances</li>
                                <li className='py-2 text-sm'>Privacy</li>
                                <li className='py-2 text-sm'>Terms & Conditions</li>
                            </ul>

                            <ul className='mr-8 flex flex-row justify-start'>
                                <span className="mx-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </span >

                                <span className="mx-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </span>
                            </ul>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Home