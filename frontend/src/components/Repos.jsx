import React from 'react'
import Repo from './Repo'

function Repos() {
  return (
    <div className='lg:w-2/3 w-full bg-glass rounded-lg px py-6'>
      <ol className='relative border-s border-gray-400'>
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </ol>
    </div>
  )
}

export default Repos