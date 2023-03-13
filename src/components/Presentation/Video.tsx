import React from 'react';

export default function Video() {
  return (
    <>
      <video className='home__video' autoPlay muted loop>
        <source
          className='home__source'
          src='https://res.cloudinary.com/di0jcyqyv/video/upload/v1678601300/dota/home/cpbkw6jdoro7obmjxfpo.webm'
        />
      </video>
      <div className='home__shadow' />
    </>
  );
}
