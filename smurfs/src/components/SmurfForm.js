import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addSmurf } from '../actions';
import { useDispatch } from 'react-redux';

const SmurfForm = (props) => {
  const { handleSubmit, register, errors } = useForm({});
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
  });
  const dispatch = useDispatch();
  

  const onSubmit = smurf => {
    console.log('pre-dispatch', smurf);
    dispatch(addSmurf(smurf)).then(res => {
      console.log('smurf form dispatch', res);
      // props.history.push('/');
    })
  }

  return (
    <div>
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
          Add Smurf!
        </button>
      </form>
    </div>
  )
}

export default SmurfForm;