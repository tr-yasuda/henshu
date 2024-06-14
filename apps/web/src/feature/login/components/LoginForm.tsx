import { Button } from '@/components/Button.tsx'
import { Card } from '@/components/Card.tsx'
import { Input } from '@/components/Input.tsx'
import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import BackgroundImage from '../images/background.webp'

export const LoginForm = () => {
  const { t } = useTranslation()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onMount: z.object({
        email: z.string().email('Please enter your email address.'),
        password: z
          .string()
          .min(12, 'Password must be at least 12 characters.')
          .max(128, 'Password must be at most 128 characters.'),
      }),
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      // TODO: handle login
      console.log(value)
    },
  })

  const formFields: {
    name: 'email' | 'password'
    label: string
    inputType: string
    validator: z.ZodType
  }[] = [
    {
      name: 'email',
      label: 'Email',
      inputType: 'email',
      validator: z.string().email(),
    },
    {
      name: 'password',
      label: 'Password',
      inputType: 'password',
      validator: z.string().min(12).max(128),
    },
  ]

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 relative'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <Card fullWidth color={'white'} className='max-w-md z-10'>
        <div className='flex justify-center mb-6'>
          <img src={'./logo.webp'} alt='Henshu logo' className='h-12 w-auto' />
        </div>
        <h2 className='text-2xl font-bold text-center mb-2'>{t('Log In')}</h2>
        <p className='text-center text-gray-600 mb-6'>
          {t('Welcome back! Please login to your account.')}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          {formFields.map((formField) => (
            <div className='mb-4' key={formField.name}>
              <form.Field
                name={formField.name}
                validators={{
                  onChange: formField.validator,
                }}
              >
                {(field) => (
                  <>
                    <label
                      htmlFor={formField.name}
                      className='block text-gray-700'
                    >
                      {t(formField.label)}
                    </label>
                    <Input
                      id={formField.name}
                      type={formField.inputType}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      errorMessage={t(field.state.meta.errors.toString())}
                      required
                    />
                  </>
                )}
              </form.Field>
            </div>
          ))}
          <Button size={'xs'} variant={'text'} className='mb-4'>
            <div className='hover:underline'>{t('Forgot Password?')}</div>
          </Button>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isDirty]}
          >
            {([canSubmit, isDirty]) => (
              <Button type='submit' fullWidth disabled={!canSubmit || !isDirty}>
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
      </Card>
    </div>
  )
}
