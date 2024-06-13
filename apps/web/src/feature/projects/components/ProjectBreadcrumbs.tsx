import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Breadcrumbs } from '../../../components/Breadcrumbs.tsx'

const list = [
  { to: '/', label: 'Home' },
  {
    to: '/projects',
    label: 'Projects',
  },
]

export const ProjectBreadcrumbs = () => {
  const { t } = useTranslation()

  return (
    <Breadcrumbs separator={'>'} className={'my-2'}>
      {list.map(({ to, label }) => (
        <Link key={to} to={to} className='text-gray-600 hover:underline'>
          {t(label)}
        </Link>
      ))}
    </Breadcrumbs>
  )
}
