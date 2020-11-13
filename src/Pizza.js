import React from 'react'

export default function Pizza(props) {
  const { details } = props
  

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>Hey {details.name} your</h2>
      <p>{details.size} pizza with</p>
      <p>{details.sauce} sauce</p>
      <p>Topped with {details.topping} is getting made</p>
      <p>we will keep an eye out for {details.instructions}</p>
    </div>
    
  )
}
