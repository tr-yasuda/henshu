import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'
import { Input } from '../../../components/Input.tsx'
import BackgroundImage from '../images/background.webp'

export const LoginForm = () => {
  const { t } = useTranslation()
  // TODO: validate email and password
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      // TODO: handle login
      console.log(value)
    },
  })

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 relative'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-md z-10'>
        <div className='flex justify-center mb-6'>
          <img src={'./logo.webp'} alt='Henshu logo' className='h-12 w-auto' />
        </div>
        <h2 className='text-2xl font-bold text-center mb-2'>{t('Log In')}</h2>
        <p className='text-center text-gray-600 mb-6'>
          {t('Welcome back! Please login to your account.')}
        </p>
        <form onSubmit={() => {}}>
          <div className='mb-4'>
            <form.Field name='email'>
              {(field) => (
                <>
                  <label htmlFor='email' className='block text-gray-700'>
                    {t('Email')}
                  </label>
                  <Input
                    id='email'
                    type='email'
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={'mt-1'}
                    errorMessage={field.state.meta.errors.join(', ')}
                    required
                  />
                </>
              )}
            </form.Field>
          </div>
          <div className='mb-4'>
            <form.Field name='password'>
              {(field) => (
                <>
                  <label htmlFor='password' className='block text-gray-700'>
                    {t('Password')}
                  </label>
                  <Input
                    id='password'
                    type='password'
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={'mt-1'}
                    errorMessage={field.state.meta.errors.join(', ')}
                    required
                  />
                </>
              )}
            </form.Field>
          </div>
          <Button size={'xs'} variant={'text'} className='mb-4'>
            <div className='hover:underline'>{t('Forgot Password?')}</div>
          </Button>
          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isFieldsValid,
            ]}
          >
            {([canSubmit, isSubmitting, isFieldsValid]) => (
              <Button
                type='submit'
                fullWidth
                disabled={!canSubmit && isSubmitting && !isFieldsValid}
              >
                {t('Log In')}
              </Button>
            )}
          </form.Subscribe>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-gray-600'>
            {t("Don't have an account?")}{' '}
            <Link to='/register' className={'inline-block'}>
              <Button variant={'text'} className={'hover:underline'}>
                {t('Sign Up')}
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
