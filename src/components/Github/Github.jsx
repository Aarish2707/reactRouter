import React from 'react'
import { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Aarish2707')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    
  return (
    <div className='p-4 m-5 text-4xl text-center text-black bg-white-600'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Profile" height={200} width={200} />
    </div>
  )
}

export default Github