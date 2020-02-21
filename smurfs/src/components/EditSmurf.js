import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateSmurf } from '../actions';

const EditSmurf = props => {
  const { handleSubmit, register, errors } = useForm({});
  const onSubmit = data => {
    props.updateSmurf(data);
      setTimeout(() => {
        props.getSmurfs();
    }, 100); 
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label className='form-name'>Name</label>
    <input
      name='name'
      ref={register({
        required: 'A smurf needs a name.'
      })}
    />
    {errors.name && errors.name.message}

    <label className='form-age'>Age</label>
    <input
      name='age'
      ref={register({
        required: 'A smurf needs an age.'
      })}
    />
    {errors.age && errors.age.message}

    <label className='form-height'>Height</label>
    <input
      name='height'
      ref={register({
        required: 'A smurf needs a height.'
      })}
    />
    {errors.height && errors.height.message}

    <button type='submit'>
      Update Smurf!
    </button>
  </form>
  )
}


export default connect(null, { updateSmurf })(EditSmurf);