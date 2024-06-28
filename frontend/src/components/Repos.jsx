import React from 'react'
import Repo from './Repo'

function Repos({repos, alwaysFullWidth=false}) {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
  return (
    <div className={`${className} bg-glass rounded-lg px py-6`}>
      <ol className='relative border-s border-gray-400'>
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
        {repos.length === 0 && <div className='flex items-center justify-center h-32'>No repositories found</div> }
      </ol>
    </div>
  )
}

export default Repos
