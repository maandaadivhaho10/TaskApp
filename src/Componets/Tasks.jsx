import React from 'react'

export const Tasks = () => {
  return (
    <>
    {Tasks.map((task)=>{
        return <h1>{task.title}</h1>
    })}
    </>
  )
}
