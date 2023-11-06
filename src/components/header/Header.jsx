import React from 'react'

const Header = ({ title }) => {
    return (
        <>
            <div className='bg-header-pattern w-full p-20 text-3xl text-white 
        text-center font-bold'>
                <p>
                    {title}
                </p>
            </div>
            <span className="h-1 w-3/4 mt-8 bg-orange-100 lg:w-1/2"></span>
        </>
    )
}

export default Header