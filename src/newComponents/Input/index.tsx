import React from 'react';
import { FC } from 'react';
import { useForm } from '../hooks/useForm';

interface User {
  name: string;
  // age: number;
  // email: string;
}

const Registration: FC = () => {
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<User>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message:
            "You're not allowed to use special characters or numbers in your name.",
        },
      },
    },
    onSubmit: () => alert('User submitted!'),
  });

  return (
    <form className='registration-wrapper' onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <input
        placeholder='Name*'
        value={user.name || ''}
        onChange={handleChange('name')}
        required
      />
      {errors.name && <p className='error'>{errors.name}</p>}

      <button type='submit' className='submit'>
        Submit
      </button>
    </form>
  );
};

export default Registration;
