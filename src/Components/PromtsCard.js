import React from 'react'

const PromtsCard = ({data,promtOnchange,selectedPromt}) => {
  return (
    <div onClick={()=>{promtOnchange(data)}} className={`${selectedPromt.id === data.id? 'border border-blue-600 cursor-pointer rounded-lg p-3 text-primary': 'border border-gray-600 cursor-pointer rounded-lg p-3 text-primary'}`}>
        <div className='text-md'>
            {data.title}
        </div>
        <div className='opacity-50'>
            {data.body}
        </div>
    </div>
  )
}

export default PromtsCard