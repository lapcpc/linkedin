import { Avatar } from '@material-ui/core'
import React from 'react'
type Props = {
    user: {
        name: string
        email: string
    }
}
function Sidebar({user}:Props) {
    const recentItem = (topic:string) => (
        <div className='flex text-sm text-gray-500 font-semibold mb-1 p-1 cursor-pointer hover:text-black hover:rounded-lg hover:bg-slate-200 '>
            <span className='mr-3 ml-1'>#</span>
            <p className='pb-2'>{topic}</p>
        </div>
    )
  return (
    <div className='mx-5 sm:mx-0 sm:inline sm:sticky rounded-lg text-center h-fit top-20' style={{flex:0.15}}>
        <div className='flex bg-white flex-col items-center border border-gray-200 border-b-0 rounded-tr-lg rounded-tl-lg  pb-3'>{/* Top*/}
            <img className=' rounded-tl-lg rounded-tr-lg object-cover  w-full h-14 -mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb2w45v8H6HlDjS3jZmMp8XELf4LfsOTojw&usqp=CAU" />
            <Avatar className='mb-3' />
            <h2 className=' text-base'>{user.name}</h2>
            <h4 className='text-gray-500 text-xs'>{user.email}</h4> 
        </div>
        <div className='p-3 mb-2 border bg-white rounded-br-lg rounded-bl-lg'>{/* Sidebar stat */}
            <div className='mt-3 flex justify-between  text-xs'>{/* pt-3 mb-3 border bg-white */}
                <p className='text-gray-500 font-semibold'>Who viewed you? </p>
                <p className='font-bold text-blue-600'>2,543</p>
            </div>
            <div className='mt-3 flex justify-between text-xs '>
                <p className='text-gray-500 font-semibold'>Views on post</p>
                <p className='font-bold text-blue-600'>2,448</p>
            </div>
        </div>
        <div className='hidden sm:flex flex-col text-left p-3 border bg-white rounded-xl mt-3 '>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programing')}
            {recentItem('software engineering')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar