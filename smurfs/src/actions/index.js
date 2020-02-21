/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const PUSH_SMURFS_START = 'PUSH_SMURFS_START';
export const PUSH_SMURFS_SUCCESS = 'PUSH_SMURFS_SUCCESS';
export const PUSH_SMURFS_FAILURE = 'PUSH_SMURFS_FAILURE';

export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';


export const getSmurfs = () => dispatch => {
  console.log('fetching smurf' )
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('ERROR!', err);
    });
};

export const addSmurf = smurf => dispatch => {
  console.log(`Posting ${smurf}`);
  dispatch({ type: PUSH_SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res.data, '.then api return');
      dispatch({ type: PUSH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: PUSH_SMURFS_FAILURE, payload: err.message })
    });
};
// export const addSmurf = smurf => dispatch => {
//   console.log(`Posting this smurf: ${smurf}`);
//   dispatch({ type: FETCH_SMURFS_START });
//   axios
//     .post("http://localhost:3333/smurfs", smurf) // send user-generated data to a server
//     .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
//     .catch(err =>
//       dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message })
//     );
// };

// export const updateSmurf= () => {

// }

export const deleteSmurf = id => dispatch => {
  // dispatch({ type: DELETE_SMURF_SUCCESS })
  console.log(`deleting smurf ${id}`);
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.message })
    })
}

