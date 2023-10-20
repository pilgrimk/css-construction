import React from 'react'
import { Header } from '../../components'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header title='Contact Us' />
            <div className='flex w-full min-h-[45vh] justify-center items-center'>
                <p className='m-8 text-4xl italic'>Contact us today for a free quote!</p>
            </div>
        </div>
    )
}

export default Contact