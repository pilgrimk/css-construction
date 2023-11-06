import React from 'react'
import { useNavigate } from 'react-router-dom';
import { data } from '../../constants'
import shortid from 'shortid'

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className={`${data.servicesOffered.bg_color} w-full my-4`}>
            <div className='container'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl p-4'>{data.servicesOffered.headline}</p>
                    <p className='p-4'>{data.servicesOffered.description}</p>
                    <ul className='list-disc mx-8 p-4'>
                        {data.servicesOffered.services.map((svc) => (
                            <li key={shortid.generate()}>
                                <span>{svc.service}</span>
                            </li>
                        ))}
                    </ul>
                    <p className='p-4'>{data.servicesOffered.call_to_action}</p>
                    <button
                        className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4'
                        onClick={() => navigate('/gallery')}>

                        {data.servicesOffered.button_label}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services