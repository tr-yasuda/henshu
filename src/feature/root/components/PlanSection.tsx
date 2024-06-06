import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'
import { Card } from '../../../components/Card.tsx'

const plans: {
  buttonText: string
  features: string[]
  color:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
    | 'gray'
  borderColor: string
  description: string
  href: string
  title: string
}[] = [
  {
    title: 'Henshu (Free)',
    description: 'Edit a variety of video types with our free plan.',
    buttonText: 'Try for free',
    features: [
      'Basic editing tools',
      'Watermarked exports',
      'Community support',
    ],
    color: 'gray',
    borderColor: 'border-gray-500',
    href: '/',
  },
  {
    title: 'Henshu Pro',
    description: 'Use advanced tools to support growth on various projects.',
    buttonText: 'Try Pro for free',
    features: ['Advanced editing tools', 'No watermarks', 'Priority support'],
    color: 'primary',
    borderColor: 'border-primary',
    href: '/',
  },
  {
    title: 'Henshu Team',
    description:
      'Use special workflow tools and collaboration features for teams.',
    buttonText: 'Try Team for free',
    features: ['Team collaboration', 'Shared projects', 'Team support'],
    color: 'secondary',
    borderColor: 'border-secondary',
    href: '/',
  },
  {
    title: 'Henshu Enterprise',
    description:
      'Manage large teams and brand design with our enterprise plan.',
    buttonText: 'Contact us',
    features: ['Custom solutions', 'Dedicated support', 'Enhanced security'],
    color: 'info',
    borderColor: 'border-info',
    href: '/',
  },
]

export const PlanSection = () => {
  const { t } = useTranslation()

  return (
    <div className='py-12 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base text-secondary-dark font-semibold tracking-wide uppercase'>
            {t('Plans for Everyone')}
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {t("Choose the plan that's right for you")}
          </p>
        </div>
        <div className='mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {plans.map((plan) => (
            <Card
              key={plan.title}
              color={'white'}
              className={clsx('relative flex flex-col', plan.borderColor)}
            >
              <h3 className='text-xl font-semibold text-gray-900'>
                {plan.title}
              </h3>
              <p className='mt-4 text-gray-500 flex-grow'>
                {t(plan.description)}
              </p>
              <ul className='mt-6 space-y-4'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-start'>
                    <svg
                      className='h-6 w-6 text-primary flex-shrink-0'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <p className='ml-3 text-base text-gray-700'>{t(feature)}</p>
                  </li>
                ))}
              </ul>
              <Link to={plan.href}>
                <Button className={clsx('mt-8')} fullWidth color={plan.color}>
                  {t(plan.buttonText)}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
