import React from 'react'
import { Header, Card } from '../../components'
import { data } from '../../constants'
import shortid from 'shortid'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header title={data.contactUs.name_long} />
      <div className='flex w-full min-h-[45vh] justify-center items-center'>
        <p className=' m-8 text-4xl italic'>Home page content will go here.</p>
      </div>
    </div>
  )
}

export default Home