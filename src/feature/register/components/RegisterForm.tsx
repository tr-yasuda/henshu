import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { Button } from '../../../components/Button.tsx'
import { Card } from '../../../components/Card.tsx'
import { Input } from '../../../components/Input.tsx'
import BackgroundImage from '../images/background.webp'

export const RegisterForm = () => {
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    validators: {
      onMount: z.object({
        username: z.string().min(2, 'Please enter your username.'),
        email: z.string().email('Please enter your email address.'),
        password: z
          .string()
          .min(12, 'Password must be at least 12 characters.'),
      }),
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      // 新規会員登録処理をここに追加
      console.log(value)
    },
  })

  const formFields: {
    name: 'username' | 'email' | 'password'
    label: string
    type: string
    validator: z.ZodType
  }[] = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      validator: z.string().min(2, 'Please enter your username.'),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validator: z.string().email('Please enter your email address.'),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      validator: z.string().min(12, 'Password must be at least 12 characters.'),
    },
  ]

  console.log(form)

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Card fullWidth color={'white'} className='max-w-md z-10'>
        <div className='flex justify-center mb-6'>
          <img src={'./logo.webp'} alt='Henshu logo' className='h-12 w-auto' />
        </div>
        <h2 className='text-2xl font-bold text-center mb-2'>{t('Sign Up')}</h2>
        <p className='text-center text-gray-600 mb-6'>
          {t('Create your account by filling out the information below.')}
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            e.stopPropagation()
            await form.handleSubmit()
          }}
        >
          {formFields.map((formField) => (
            <form.Field
              key={formField.name}
              name={formField.name}
              validators={{
                onChange: formField.validator,
              }}
            >
              {(field) => (
                <div className='mb-4'>
                  <label
                    htmlFor={formField.name}
                    className='block text-gray-700'
                  >
                    {t(formField.label)}
                  </label>
                  <Input
                    type={formField.type}
                    id={formField.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                    errorMessage={t(field.state.meta.errors.toString())}
                  />
                </div>
              )}
            </form.Field>
          ))}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isDirty]}
          >
            {([canSubmit, isDirty]) => (
              <Button type='submit' fullWidth disabled={!canSubmit || !isDirty}>
                {t('Sign Up')}
              </Button>
            )}
          </form.Subscribe>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-gray-600 inline-block mr-2'>
            {t('Already have an account?')}
          </p>
          <Link to='/login' className={'inline-block'}>
            <Button variant={'text'} className={'hover:underline'}>
              {t('Log In')}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
