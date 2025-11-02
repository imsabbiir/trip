import React from 'react'

function Title({title, subTitle}) {
  return (
    <div className='w-full text-center relative'>
        <h2 className='uppercase text-5xl md:text-8xl text-[#0076b657] font-bold font-anton'>{title}</h2>
        <span className='uppercase text-2xl md:text-6xl text-[#555] font-anton font-bold tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2'>{subTitle}</span>
    </div>
  )
}

export default Title