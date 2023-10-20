import React from 'react'

const Header = ({ title }) => {
    return (
        <div className='bg-header-pattern w-full p-20 text-3xl text-white 
        text-center font-bold'>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Header