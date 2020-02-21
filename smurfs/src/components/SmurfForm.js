import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';

const SmurfForm = props => {
  const { handleSubmit, register, errors } = useForm({});

  // const onSubmit = smurf => {
  //   console.log('pre-dispatch', smurf);
  //   dispatch(addSmurf(smurf)).then(res => {
  //     console.log('smurf form dispatch', res);
  //     // props.history.push('/');
  //   })
  // }


  // Add a new smurf. When added, render updated list of smurfs.
  const onSubmit = data => {
    console.log(data);
    props.addSmurf(data); 
    setTimeout(() => {
      props.getSmurfs();
    }, 100); 
  };

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

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { addSmurf, getSmurfs })(SmurfForm);