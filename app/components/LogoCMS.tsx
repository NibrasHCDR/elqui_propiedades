import React from 'react'
import Image from 'next/image'

function LogoCMS(props: any) {
    const { renderDefault, title} = props;

  return (
    <div className="flex items-center space-x-2">
        <Image
        className="rounded-full object-cover"
        height={50}
        width={50} 
        src={'https://i.postimg.cc/HnMgzFBT/Screenshot-3.png'}
        alt={'logo'}
        >

        </Image>
        {renderDefault(props)}
    </div>
  )
}

export default LogoCMS