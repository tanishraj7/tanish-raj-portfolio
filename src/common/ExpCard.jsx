import React from 'react'

function ExpCard({src, h3, h4, p, a}) {
  return (
    <>
        <a href={a} target='_blank'><img className="hover"src={src} alt='project logo'></img></a>
        <div className='exp-dets'>
        <h3>{h3}</h3>
        <h4>{h4}</h4>
        <p>{p}</p>
        </div>
    </>
  )
}

export default ExpCard