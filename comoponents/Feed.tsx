import { Avatar } from '@material-ui/core'
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React from 'react'
import InputOption from './InputOption'
import Post from './Post'

function Feed() {
  return (
    <div className='flex flex-col mx-5' style={{flex:0.35}}>
        <div className='bg-white p-3 pb-5 rounded-lg mb-5 '>{/* Feed Input Container */}
            <div className='flex  space-x-2'>
            <Avatar />
            <div className='border border-gray-200 rounded-3xl flex text-gray-500 pl-4 items-center w-full'>{/* Feed Input */}
                <Create />
                <form className='flex w-full'>
                    <input className='border-0 flex-1 ml-3 outline-0 font-semibold'  type="text" />
                    <button className=' hidden' type='submit'>Send</button>

                </form>
            </div>
            </div>
            <div className='flex justify-between'>
                <InputOption Icon={Image} title={'Photo'} color={'#70B5F9'} />
                <InputOption Icon={Subscriptions} title={'Video'} color={'E7A33E'} />
                <InputOption Icon={EventNote} title={'Event'} color={'C0CBCD'} />
                <InputOption Icon={CalendarViewDay} title={'Write Article'} color={'7FC15E'} />
            </div>
        </div>
        {/* Posts */}
        <Post name={'Luis'} description={'El mas post'} message={'Esto es un post'} />
    </div>
  )
}

export default Feed