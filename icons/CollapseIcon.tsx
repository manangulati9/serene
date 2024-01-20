import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const CollapseIcon = () => {
  return (
    <div >
    <Image src={'/play-solid.svg'}  className='bg-white' alt={''} width={50} height={50}/>
    </div>
  )
}

export default CollapseIcon

