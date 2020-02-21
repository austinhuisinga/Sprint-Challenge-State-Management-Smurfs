import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, getSmurfs, updateSmurf } from '../actions';


const Smurf = props => {

  // Deletes selected smurf, and renders updated list of smurfs.
  const eradicate = e => {
    e.preventDefault();
    props.deleteSmurf(props.smurf.id);
    setTimeout(() => {
      props.getSmurfs();
    }, 100); 
  };

  const update = e => {
    e.preventDefault();
    props.updateSmurf(props.smurf.id);
    setTimeout(() => {
      props.getSmurfs();
    }, 100);
  };

  return (
    <div className='smurf'>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h4>{props.smurf.height}</h4>
      <button className='btn' onClick={update}>Edit Smurf</button>
      <button className='btn' onClick={eradicate}>Delete Smurf</button>
    </div>
  )
}

export default connect(null, { getSmurfs, deleteSmurf, updateSmurf })(Smurf);