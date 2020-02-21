import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, getSmurfs } from '../actions';


const Smurf = props => {

  const eradicate = e => {
    e.preventDefault();
    props.deleteSmurf(props.smurf.id);
    setTimeout(() => {
      props.getSmurfs();
    }, 100); 
  };

  return (
    <div className='smurf'>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h4>{props.smurf.height}</h4>
      <button onClick={eradicate}>Delete Smurf</button>
    </div>
  )
}

export default connect(null, { getSmurfs, deleteSmurf })(Smurf);