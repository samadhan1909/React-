import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center text-white p-4 text-2xl bg-gray-600' >GitHub Followers : 
    {data.followers}
    <img src={data?.avatar_url} alt="GitHub" width={200}/></div>
  )
}

export default GitHub

export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}