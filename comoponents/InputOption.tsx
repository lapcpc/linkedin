import React from 'react'
type Props = {
    Icon:any
    title: string
    color:string
}
export default function InputOption({Icon, title, color }:Props) {
  return (
    <div className='flex items-center mt-4 text-gray-500 p-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg '>
        <Icon style={{color: color}} />
        <h4 className=' ml-1'>{title}</h4> 
    </div>
  )
}
