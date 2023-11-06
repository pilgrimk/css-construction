import React, { useEffect } from 'react'
import { Header, Hero, Services } from '../../components'
import { data } from '../../constants'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col justify-center items-center'>
      <Hero />
      <div className='container max-w-5xl p-4'>
        <div className='flex w-full min-h-[45vh] justify-center items-center'>
          <Services />
        </div>
      </div>
    </div>
  )
}

export default Home