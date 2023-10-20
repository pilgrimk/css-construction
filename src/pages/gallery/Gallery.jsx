import React, { useEffect, useRef } from 'react'
import { Header } from '../../components/'

const Gallery = () => {
  const viteCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: viteCloudName,
          //aspectRatio: "16:9",
          mediaAssets: [
            { tag: "gallery", transformation: { crop: "fit" } },
          ],
          // carouselStyle: "indicators",
          // carouselLocation: "bottom",
        })
        .render();
    }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header title='Gallery' />
      <div className='container max-w-5xl p-4'>
        <div ref={galleryRef} />
      </div>
    </div>
  )
}

export default Gallery