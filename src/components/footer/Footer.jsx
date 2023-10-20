import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin
} from 'react-icons/bs'
import { data } from '../../constants'
import shortid from 'shortid'

const Footer = () => {
  const getLinkedIcon = (title) => {
    switch (title) {
      case 'Instagram':
        return <BsInstagram />;
      case 'Twitter':
        return <BsTwitter />;
      case 'LinkedIn':
        return <BsLinkedin />;
      default:
        return <BsFacebook />;
    }
  };

  return (
    <div className='flex flex-col bg-gradient-to-b from-slate-600 to-black'>
      <div className='flex flex-col justify-evenly p-12 md:flex-row'>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <h1></h1>
          <p>{data.contactUs.name_long}</p>
          <p>{data.contactUs.addr}</p>
          <p>{data.contactUs.city}, {data.contactUs.state_short}, {data.contactUs.postal_code}</p>
        </div>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p>Phone: {data.contactUs.phone_1}</p>
          <p>Email: {data.contactUs.email_1}</p>
          {(data.contactUs.social_media) &&
            <div>
              {data.contactUs.social_media.map((media) => (
                <button
                  className='pt-2 pr-4'
                  key={shortid.generate()}
                  aria-label={media.title}
                  href={media.link}>
                  {getLinkedIcon(media.title)}
                </button>
              ))}
            </div>
          }
        </div>
      </div>
      <div className='bg-black text-center text-white p-4'>
        <p>2023 {data.contactUs.name_long}. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer