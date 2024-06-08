import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from './Button.tsx'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-50 p-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center'>
          <img
            src={'./logo.webp'}
            alt='Henshu logo'
            className='h-8 w-auto mr-2'
          />
          <span className='text-gray-800 text-xl font-bold'>Henshu</span>
        </Link>
        <nav className='flex space-x-4'>
          <Link to='/login'>
            <Button color={'primary'}>{t('Log In')}</Button>
          </Link>
          <Link to='/'>
            <Button color={'secondary'}>{t('Sign Up')}</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
