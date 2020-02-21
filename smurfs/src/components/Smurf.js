import React from 'react';

const Smurf = ({smurf}) => {
  return (
    <div className='smurf'>
      <h2>{smurf.name}</h2>
      <h4>{smurf.age}</h4>
      <h4>{smurf.height}</h4>
    </div>
  )
}

export default Smurf;