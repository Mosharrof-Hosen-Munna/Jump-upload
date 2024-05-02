import React, { useState } from 'react'
import PromtsCard from './PromtsCard'

const Promts = ({setSelectedPromt,selectedPromt}) => {
  const promtOnchange = (promt) => {
    setSelectedPromt(promt)
  };

    const promtsData = [{
      id: 1,
      title:'Plan a itinerary',
      body:'To experience the wildlife'
    },{
      id: 2,
      title:'Plan a trip',
      body:'for photography expedition in Ireland'
    },{
      id: 3,
      title:'Write a spreadsheet formula',
      body:'to convert a data to the weekday'
    },{
      id: 4,
      title:'Top 10 high Vulnerabilities',
      body:'Give me hight priority vulnerabilities'
    }]

   

  return (
    <div className='grid grid-cols-2 gap-4 '>
      {
         promtsData.map((data)=><PromtsCard key={data.id} data={data} promtOnchange={promtOnchange} selectedPromt={selectedPromt}/>)
      }
        
    </div>
  )
}

export default Promts