import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
  return (
    <div className="p-4 text-3xl text-center text-white bg-gray-600">User: {id}</div>
  )
}

export default User