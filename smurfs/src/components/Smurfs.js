import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      <button onClick={props.getSmurfs}>Fetch some smurfs!</button>
      <div>
        {!props.smurfs && !props.fetchingSmurfs && (
          <h2>Smurf's up!</h2>
        )}
        {props.fetchingSmurfs && (
          <p>Wait for it...</p>
        )}
        {!props.fetchingSmurfs && props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);