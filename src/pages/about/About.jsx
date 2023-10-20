import React from 'react'
import { Header, Card } from '../../components'
import { data } from '../../constants'
import shortid from 'shortid'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header title={data.aboutUs.title} />
      <div className='container max-w-5xl p-4'>
        <div className='grid place-items-center'>
          {data.aboutUs.infoObjs.map((info) => (
            <div
              className='w-100'
              key={shortid.generate()}>
              <Card
                key={shortid.generate()}
                infoItem={info}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About