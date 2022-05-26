import React, { Component } from 'react'

export class NotFound extends Component {
    render() {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <p className='text-xl text-red-500 font-bold my-3'>Not Found</p>
                <img src='http://unsplash.it/300/300?random&gravity=center' alt='' />
            </div>
        )
    }
}

export default NotFound