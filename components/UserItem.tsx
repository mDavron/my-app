import React from 'react'

export default function UserItem() {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
      <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-bold flex items-center justify-center">
        DM
      </div>
      <div className='grow'>
        <p className='text-base font-bold'>Davron Bek</p>
        <p className='text-sm text-neutral-500'>bekdavron401@gmail.com</p>
      </div>
    </div>
  )
}
