import { RegisterRequestSchema } from 'contracts';
import { Link } from 'react-router-dom';


import { routes } from '@/shared/config/routes';
import { useAppForm } from '@/shared/lib';
import { Form, Button, Input, Loader, PasswordInput } from '@/shared/ui';

import { useRegisterUser } from '../api/use-register-user';

export const RegisterPage = () => {
  const form = useAppForm(RegisterRequestSchema, {
    defaultValues: { name: '', email: '', password: '' },
  });

  const { mutate: register, isPending } = useRegisterUser(form.reset);

  return (
    <div className='w-full max-w-md space-y-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome!</h1>
        <p className='mt-2 text-gray-600'>Create your account</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => register(data))}
          className='space-y-6'
          noValidate>
          <Form.Field
            control={form.control}
            name='name'
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Input
                    autoFocus
                    autoComplete='name'
                    placeholder='Full name (optional)'
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name='email'
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Input
                    autoComplete='email'
                    placeholder='Email'
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name='password'
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <PasswordInput
                    autoComplete='new-password'
                    placeholder='Password'
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Button
            type='submit'
            disabled={isPending}>
            {isPending ? <Loader /> : 'Create Account'}
          </Button>
        </form>
      </Form>

      <div className='text-center'>
        <p className='text-sm text-gray-600'>
          Already have an account?{' '}
          <Link
            to={routes.auth.login}
            className='rounded font-medium text-blue-600 transition-colors hover:text-blue-500
              focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none'>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
