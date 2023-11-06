import React from 'react'
import { data } from '../../constants'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className='bg-hero-bg bg-no-repeat w-full bg-cover bg-center h-[250px] md:h-[350px]'>
                <div className="flex flex-col items-center justify-center pt-32">
                    <h1 className="text-lg md:text-5xl font-bold outlined-text">{data.heroSection.title}</h1>
                    <p className="text-md md:text-2xl outlined-text">{data.heroSection.subtitle}</p>
                </div>
            </div>
            <span className="h-1 w-3/4 mt-8 bg-orange-100 lg:w-1/2"></span>
        </>
    )
}

export default Hero