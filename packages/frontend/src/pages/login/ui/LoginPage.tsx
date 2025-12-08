import { LoginRequestSchema } from 'contracts';
import { Link } from 'react-router-dom';

import { useLoginUser } from '../api/use-login-user';

import { routes } from '@/shared/config/routes';
import { useAppForm } from '@/shared/lib';
import { Form, Button, Input, Loader, PasswordInput } from '@/shared/ui';

export const LoginPage = () => {
  const form = useAppForm(LoginRequestSchema, {
    defaultValues: { email: '', password: '' },
  });

  const { mutate: login, isPending } = useLoginUser(form.reset);

  return (
    <div className='w-full max-w-md space-y-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome back!</h1>
        <p className='mt-2 text-gray-600'>Sign in to your account</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => login(data))}
          className='space-y-6'
          noValidate>
          <Form.Field
            control={form.control}
            name='email'
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Input
                    autoFocus
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
                    autoComplete='current-password'
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
            {isPending ? <Loader /> : 'Log In Now'}
          </Button>
        </form>
      </Form>

      <div className='text-center'>
        <p className='text-sm text-gray-600'>
          Don't have an account?{' '}
          <Link
            to={routes.auth.register}
            className='rounded font-medium text-blue-600 transition-colors hover:text-blue-500
              focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
