import React, { useEffect } from 'react'
import { Header } from '../../components'
import { data } from '../../constants'
import shortid from 'shortid'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <Header title='Contact Us' />
            <div className='flex flex-col max-w-5xl min-h-[45vh] justify-center items-center'>
                <p className='text-4xl p-4'>
                    {data.contactUsPage.headline}
                </p>
                {data.contactUsPage.description.map((desc) => (
                    <p className='p-4'
                        key={shortid.generate()}>
                        {desc} <br />
                    </p>
                ))}
                <span className="h-1 w-3/4 mt-4 bg-orange-100 lg:w-1/2"></span>
                <p className='m-8 text-4xl italic'>{data.contactUsPage.sub_headline}</p>
                <span className="h-1 w-3/4 mb-8 bg-orange-100 lg:w-1/2"></span>
            </div>
        </div>
    )
}

export default Contact