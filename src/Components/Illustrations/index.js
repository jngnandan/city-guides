import React, { Component } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {Link} from 'react-router-dom'

export class Illustrations extends Component {
  render() {
    return (
      <div>
            <div className='flex flex-row justify-start items-center text-xl font-medium mx-4 my-4'>
                <Link to="/"><AiOutlineArrowLeft /></Link>
                <h1 className='pl-3'> Illustrations</h1>
        </div>
            

        <div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mx-6">
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                    <img
                        className="object-cover w-full border"
                        src="https://cdn.pixabay.com/photo/2018/05/08/14/34/lightweight-transporter-3383177__340.png"
                    />
                </div>
        </div>
      </div>
    )
  }
}

export default Illustrations