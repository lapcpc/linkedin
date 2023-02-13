import React from 'react'

type Props = {
    value: boolean
    action: ()=>void
}
export default function Error({value,action}:Props) {
  return (
    <>
    {value  ? (<div className=' border border-red-500 px-10
     py-5 mx-10 flex justify-between'>
        <p>Error Auth. Try Again.</p>
        <p onClick={action} className='cursor-pointer text-xl text-red-500'> x </p>
    </div>) : (<div></div>) }
    </>
    
  )
}
