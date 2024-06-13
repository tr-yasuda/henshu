import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../components/Button.tsx' // 背景画像のインポート
import { Card } from '../../../components/Card.tsx'
import BackgroundImage from '../images/not-found-error.webp'

export const NotFoundError = () => {
  const { t } = useTranslation()

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Card color={'gray'}>
        <h1 className='text-4xl font-bold mb-4'>404</h1>
        <p className='text-lg text-gray-700 mb-4'>{t('Page Not Found')}</p>
        <p className='text-gray-600 mb-6'>
          {t(
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
          )}
        </p>
        <Link to='/'>
          <Button fullWidth>{t('Go to Home')}</Button>
        </Link>
      </Card>
    </div>
  )
}
