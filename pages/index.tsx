import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
    password:""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser({...user,[e.target.name]:e.target.value})
}
  const   login =async(e:any)=>{
    e.preventDefault();
    try {
        const res = await axios.post('https://linkedin-beige.vercel.app/api/login', user )
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token);
         router.push('/home')
    } catch (err:any) {
        console.log(err.response.status);
    }
    
    
    /*
    localStorage.setItem('token', res.token);
    router.push('/home')
    */

  }

  return (
    <div>
      <div className=' block'>
        <img src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png' className=' w-28 ml-14 mt-2.5' />
      </div>

    <div className="flex flex-col mx-auto w-10/12 sm:w-7/12 md:w-5/12 lg:w-3/12  p-5 shadow-xl shadow-gray-600/20 rounded-lg" >
     <form className='flex flex-col space-y-6 w-11/12 mx-auto'>
       <div className='space-y-1'>
       <h1 className=' text-3xl font-semibold' >Iniciar sesión</h1>
       <p>Mantente al día de tu mundo profesional</p>
       </div>
       <input className='p-2 py-3 border placeholder:text-lg placeholder:pl-1 border-black rounded-lg' name='email' value={user.email} onChange={handleChange} placeholder="Email"/>
       <input className='p-2 py-3 border placeholder:text-lg placeholder:pl-1 border-black rounded-lg' name='password' value={user.password} onChange={handleChange} placeholder="Password"/>
       <br />
       <button className='text-white font-medium rounded-full bg-blue-700 py-3 p-2 text-base' onClick={login}>
        Iniciar sesion
        </button> 
        <div className='flex flex-row '>
        <div className='w-[45%] ml-[5%] mt-3'>
            <hr />
          </div>
          
          <p className='inline px-1'>o </p>
          <div className='w-[45%] mt-3'>
            <hr />
          </div>
          
        </div>
        <div className='flex flex-row space-x-1'>
          
        <p>
        ¿Estás empezando a usar LinkedIn?
        </p>
        <Link href={'/register'} className="text-blue-700 font-semibold" >
          Unirse ahora
        </Link> 
        </div>
        </form>

    </div>
    </div>
  )
}

export default Home
