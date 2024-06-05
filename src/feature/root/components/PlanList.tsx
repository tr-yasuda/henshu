import { IconSparkles } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'
import { Card } from '../../../components/Card.tsx'

const plans: {
  name: string
  tips: string
  description: string
  buttonLabel: string
}[] = [
  {
    name: 'Henshu (Free)',
    tips: 'for individuals',
    description: 'You can edit all kinds of videos.',
    buttonLabel: 'Try Henshu (Free) for free',
  },
  {
    name: 'Henshu Pro',
    tips: 'for individuals',
    description:
      'Special features can be used to support the growth of various projects.',
    buttonLabel: 'Try Henshu Pro for free',
  },
  {
    name: 'Henshu Team',
    tips: 'for teams',
    description:
      'Teams can collaborate using special work-place tools and workflows.',
    buttonLabel: 'Try Henshu Team for free',
  },
  {
    name: 'Henshu Enterprise',
    tips: 'for organizations',
    description:
      'It allows organizations to unify their teams and manage their brand and design.',
    buttonLabel: 'Contact us',
  },
]

export const PlanList = () => {
  const { t } = useTranslation()
  return (
    <div className={'m-4 sm:mx-auto '}>
      <div className='text-4xl font-bold text-gray-800 my-5 text-center'>
        {t('Perfect for all')}
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-auto-rows-1fr'>
        {plans.map((plan) => (
          <Card key={plan.name} color={'gray'}>
            <div className='p-4 rounded-lg shadow-lg flex flex-col justify-between h-full'>
              <div>
                <div className={'flex justify-between'}>
                  <p className='text-gray-800 text-xs my-1 py-0.5 px-2 border-gray-100 rounded bg-info inline-block'>
                    {t(plan.tips)}
                  </p>
                  {plan.name !== 'Henshu (Free)' && <IconSparkles size={16} />}
                </div>
                <div className={'text-center'}>
                  <h3 className='text-xl font-semibold my-2'>{t(plan.name)}</h3>
                  <p className={'text-gray-600 flex-grow my-2'}>
                    {t(plan.description)}
                  </p>
                </div>
              </div>
              <Button fullWidth>{t(plan.buttonLabel)}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
