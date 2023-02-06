import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React from 'react'
import InputOption from './InputOption'
type Props = {
    name: string
    description: string
    message: string
    photoUrl?: string
}
export default function Post({name, description, message, photoUrl}:Props) {
  return (
    <div className='bg-white p-6 mb-2 rounded-lg'>
        <div className='flex mb-2 '>
            <Avatar />
            <div className='ml-2'>
                <h2 className='text-sm'>{name}</h2>
                <p className='text-xs text-gray-500'>{description}</p>
            </div>
        </div>
        <div className='' style={{overflowWrap: 'anywhere'}}>{/* Post body */}
                {message}
        </div>
        <div className='flex justify-evenly'>
        
            <InputOption Icon={ThumbUpOutlined} title={'Like'} color={'gray'} />
            <InputOption Icon={ChatOutlined} title={'Comment'} color={'gray'} />
            <InputOption Icon={ShareOutlined} title={'Share'} color={'gray'} />
            <InputOption Icon={SendOutlined} title={'Send'} color={'gray'} />
        </div>
    </div>
  )
}
