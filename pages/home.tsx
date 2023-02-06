import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { VerifiedUser,Search, SupervisorAccount,BusinessCenterOutlined, Chat, Notifications, Close } from '@material-ui/icons'
import { Home  as HomeIcon} from '@material-ui/icons'
import HeaderOptions from '../comoponents/HeaderOptions'
import Sidebar from '../comoponents/Sidebar'
import Feed from '../comoponents/Feed'
import Widgets from '../comoponents/Widgets'
type Post = {
  name: string
}


const Home = () => {
  /**
   {data}:InferGetServerSidePropsType<typeof getServerSideProps>
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/hello')
  const data:Post = await res.json()
  console.log(data)
  return {
    props: {
      data: data,
    },
  } 
}

   */
  const router =useRouter()
  
  const [user, setUser] = useState({
    email:"",
    name:""
  })
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
        router.push('/');
        data()
      }
      data()
      
  }, [])
  
  const   data =async()=>{
    //e.preventDefault();
    try {
        const res = await axios.get('https://linkedin-beige.vercel.app/api/user', { headers: { token: localStorage.getItem('token')}})
        console.log(res.data)
        setUser(res.data.user)
        
    } catch (err:any) {
        console.log(err.response.status);
    }
    
  
   

  }
  const logout= ()=> {
    localStorage.clear();
    router.push('/');
  }

  return (
    <div className=' h-screen'>
     <div className='flex lg:space-x-80 justify-evenly border-b border-gray-100 py-3 w-[100%] sticky bg-white top-0 z-50 '> {/* Header */}
      <div className='flex flex-row' >
      <img className=" mr-2 object-contain h-10" src='https://cdn-icons-png.flaticon.com/512/174/174857.png'  />
      <div className='hidden  p-5 sm:flex items-center rounded-md h-5 text-gray-500 bg-gray-100'>
        <Search />
        <input className=' outline-none border-0 bg-transparent ' type="text" placeholder='Buscar'/>
      </div>
      </div>
      
      <div className='flex flex-row space-x-2'>{/* Header right */}
        <HeaderOptions Icon={HomeIcon} title={'Home'} />
        <HeaderOptions Icon={SupervisorAccount} title={'My network'} />
        <HeaderOptions Icon={BusinessCenterOutlined} title={'Jobs'} />
        <HeaderOptions Icon={Chat} title={'Messaging'} />
        <HeaderOptions Icon={Notifications} title={'Notificacations'} />
        <div className='cursor-pointer' onClick={logout}>
          <HeaderOptions Icon={Close} title={'Logout'} />
        </div>
        {/* <HeaderOptions Icon={} title={''} /> */}
      </div>
     </div>
      <div className='h-screen flex flex-col  bg-slate-200 sm:flex-row sm:justify-center pt-7 '>
        <Sidebar user={user} />
        <Feed />
        <Widgets />
       
      </div>
      
    </div>
  )
}

export default Home
