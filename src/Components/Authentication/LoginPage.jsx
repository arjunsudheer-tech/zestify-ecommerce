import './LoginPage.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginPage = () => {

  const schema = z.object({
    email: z.string().email({message: 'Enter valid email address'}),
    password: z.string().min(8,{message: 'Please enter mimimum 8 characters'})
  })

  const {register , handleSubmit , formState: {errors}} = useForm({resolver: zodResolver(schema)});

  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <section className="form-page">
      <form className='authentication-form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form-inputs">
          <div>
            <label htmlFor="name">Email</label>
            <input 
              type="email" 
              className='form-text-input'
              placeholder='Enter email...'
              {...register('email')}
            />
            {errors.email && <em className='form-error'>{errors.email.message}</em>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className='form-text-input'
              placeholder='Enter password...'
              {...register('password')}
            />
            {errors.password && <em className='form-error'>{errors.password.message}</em>}
          </div>
          <button type='submit' className='search-button form-submit'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default LoginPage