import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'

export const CTAButtonSection = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            {t('Join Us Today')}
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            {t(
              'Experience the best video editing tool. Sign up now or log in to get started.',
            )}
          </p>
          <div className='mt-8 flex justify-center space-x-4'>
            <Link to='/login'>
              <Button size={'xl'} color={'primary'}>
                {t('Log In')}
              </Button>
            </Link>
            <Link to='/register'>
              <Button size={'xl'} color={'secondary'}>
                {t('Sign Up')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
