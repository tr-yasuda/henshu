import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'

export const HeroHeader = () => {
  const { t } = useTranslation()
  return (
    <div className='relative bg-gray-800 overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='https://via.placeholder.com/1920x1080'
          alt='Henshu background'
        />
        <div className='absolute inset-0 bg-gray-700 opacity-50' />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>
              {t('Create Amazing Videos')}
            </span>{' '}
            <span className='block text-primary xl:inline'>
              {t('Effortlessly')}
            </span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl'>
            {t(
              'Edit your videos with our intuitive and powerful tools. No experience required.',
            )}
          </p>
          <div className='mt-10 sm:flex sm:justify-center space-x-4'>
            <Link to='/'>
              <Button size={'xl'}>{t('Get Started')}</Button>
            </Link>
            <Link to='/about'>
              <Button size={'xl'} color={'info'}>
                {t('Learn More')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
