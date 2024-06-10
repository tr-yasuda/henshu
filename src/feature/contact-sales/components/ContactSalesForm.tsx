import { useForm } from '@tanstack/react-form' // 背景画像のインポート
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { Button } from '../../../components/Button.tsx'
import { Card } from '../../../components/Card.tsx'
import { Input } from '../../../components/Input.tsx'
import { Textarea } from '../../../components/Textarea.tsx'
import BackgroundImage from '../images/background.webp'

const formFields: {
  name: 'name' | 'email' | 'company' | 'message'
  label: string
  inputType?: string
  validator: z.ZodType
}[] = [
  {
    name: 'name',
    label: 'Name',
    inputType: 'text',
    validator: z.string().min(1, 'Please enter your name.'),
  },
  {
    name: 'email',
    label: 'Email',
    inputType: 'email',
    validator: z.string().email('Please enter your email address.'),
  },
  {
    name: 'company',
    label: 'Company Name',
    inputType: 'text',
    validator: z.string().min(1, 'Please enter your company.'),
  },
  {
    name: 'message',
    label: 'Message',
    validator: z.string().min(1, 'Please enter a message.'),
  },
]

export const ContactSalesForm = () => {
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    validators: {
      onMount: z.object({
        name: z.string().min(1, 'Please enter your name.'),
        email: z.string().email('Please enter your email address.'),
        company: z.string().min(1, 'Please enter your company.'),
        message: z.string().min(1, 'Please enter a message.'),
      }),
    },
    validatorAdapter: zodValidator,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Card fullWidth color={'white'} className='max-w-md z-10'>
        <h2 className='text-2xl font-bold text-center mb-2'>
          {t('Contact Sales')}
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          {t('Please fill out the form below to contact our sales team.')}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
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
                  {formField.name !== 'message' ? (
                    <Input
                      type={formField.inputType}
                      id={formField.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                      errorMessage={t(field.state.meta.errors.toString())}
                    />
                  ) : (
                    <Textarea
                      id={formField.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                      errorMessage={t(field.state.meta.errors.toString())}
                    />
                  )}
                </div>
              )}
            </form.Field>
          ))}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isDirty]}
          >
            {([canSubmit, isDirty]) => (
              <Button type='submit' fullWidth disabled={!canSubmit || !isDirty}>
                {t('Submit')}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </Card>
    </div>
  )
}
