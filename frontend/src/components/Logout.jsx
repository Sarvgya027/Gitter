import React from 'react'
import { MdLogout } from 'react-icons/md'

function Logout() {
  return (
    <>
			<img src='/avatar.png' className='w-10 h-10 rounded-full border border-gray-800' />

			<div
				className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
				// onClick={handleLogout}
			>
				<MdLogout size={22} />
			</div>
		</>
  )
}

export default Logout