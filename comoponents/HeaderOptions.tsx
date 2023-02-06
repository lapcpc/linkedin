import React from 'react'
type Props = {
    Icon: any,
    title: string
};

function HeaderOptions({Icon, title}:Props) {
  return (
    <div className='flex flex-col items-center mr-5 cursor-pointer hover:text-black text-gray-500 '>
        {Icon && <Icon classname="" />}
        <h3 className=' text-sm font-normal'>{title}</h3> 
    </div>
  )
}

export default HeaderOptions