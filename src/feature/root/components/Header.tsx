import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx'

export const Header = () => {
  const isLoggedIn = false

  const { t } = useTranslation()

  return (
    <header className='fixed top-0 w-full bg-gray-200 bg-opacity-50 text-primary p-4 z-50'>
      <nav className='flex justify-between items-center'>
        <ul>
          <li>
            <Link
              to='/'
              className='hover:text-primary-dark text-xl font-semibold'
            >
              Henshu
            </Link>
          </li>
        </ul>
        <ul className='flex space-x-2'>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to='/'>
                  <Button size={'sm'}>{t('Login')}</Button>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <Button size={'sm'} color={'secondary'}>
                    {t('Register')}
                  </Button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to='/' className='hover:text-gray-300'>
                <Button size={'sm'}>{t('Logout')}</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
