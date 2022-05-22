
import React, { Component } from 'react'
import css from '..//Home/index.css'
import { v4 as uuidv4 } from 'uuid'
import Tour from '../Tour'

const tabList = [
    {
        id: uuidv4(),
        tabName: 'Students',
        category: 'Essentials',
    },
    {
        id: uuidv4(),
        tabName: 'Visitors',
        category: 'Essentials',
    },
    {
        id: uuidv4(),
        tabName: 'New Movers',
        category: 'Essentials',
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
    },

]

export class Home extends Component {
    state = {
        select: 'Students'
    }
    render() {
        const changeTab = () => {
            console.log("cool")
        }
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                class="block w-full"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                class="block w-full"
                                alt="Camera"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                class="block w-full"
                                alt="Exotic Fruits"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div>
                    <div className='flex flex-row justify-center items-center my-3'>
                    {tabList.map(eachitem => (
                        <button onClick={changeTab} className='w-28 my-3'>{eachitem.tabName}</button>
                    ))}
                    </div>

                    <h1 className='text-xl font-medium mx-5 my-3'>Guides</h1>

                    <div className='flex flex-wrap mx-4'>
                        {tourList.map(eachitem => (
                            <Tour tourList={eachitem}  key={eachitem.id}/>
                        ))}
                    </div>
                </div>


            </div>
        )
    }
}

export default Home