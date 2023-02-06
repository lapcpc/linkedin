import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { format } from 'path'
import Link from 'next/link'


const Register = () => {
    const router  = useRouter()
    const  [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
            setNewUser({...newUser,[e.target.name]:e.target.value})
    }
    const signup =async (e:any)=> {
        e.preventDefault();
    try {
        const res = await axios.post('https://linkedin-beige.vercel.app/api/signup', newUser)
        router.push('/');
    } catch (err:any) {
        console.log("El mas error")
        console.log(err.response.status);
    }
       
         
      }
  return (
    <div>
      <div className=' block'>
        
        <img src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png' className=' w-28 ml-14 mt-2.5' />
      </div>
      <div className='w-fit mx-auto'>
        <h1 className='w-fit text-3xl'>Saca el máximo partido a tu vida profesional</h1>
      </div>

    <div className="flex mt-10 flex-col mx-auto w-10/12 sm:w-7/12 md:w-5/12 lg:w-3/12  p-5 shadow-xl shadow-gray-600/20 rounded-lg" >
    
     <form className='flex flex-col space-y-3 w-11/12 mx-auto'>
      <div className='flex flex-col'>
      <label className='text-sm font-light py-1'>Name</label>
       <input name='name' className=' rounded-md border p-1 border-gray-500' value={newUser.name} onChange={handleChange} placeholder=""/>
      </div>
      <div className='flex flex-col'>
      <label className='text-sm font-light py-1'>Email</label>
       <input className='rounded-md border p-1 border-gray-500' name='email' value={newUser.email} onChange={handleChange} placeholder=""/>
      </div>
      <div className='flex flex-col'>
      <label className='text-sm font-light py-1'>Password</label>
       <input className='rounded-md border p-1 border-gray-500' name='password' value={newUser.password} onChange={handleChange} placeholder=""/>
      </div>
       
       
       <button onClick={signup} className='text-white font-medium rounded-full bg-blue-700 py-3 p-2 text-base'>
        Aceptar y unirse
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
        ¿Ya eres miembro de LinkedIn?
        </p>
        <Link href={'/'} className="text-blue-700 font-semibold" >
          Iniciar sesion
        </Link> 
        </div>
     </form>
      
    </div>
    </div>
  )
}

export default Register
