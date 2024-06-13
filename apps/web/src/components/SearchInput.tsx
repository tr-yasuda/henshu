import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'
import type React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type SearchInputProps = {
  placeholder?: string
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'gray'
  className?: string
  onSearch: (keyword: string) => void
}

export const SearchInput = ({
  placeholder = 'Search...',
  color = 'primary',
  className,
  onSearch,
}: SearchInputProps) => {
  const { t } = useTranslation()
  const [keyword, setKeyword] = useState('')

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(keyword)
  }

  return (
    <form
      onSubmit={handleSearch}
      className={clsx(
        'flex items-center bg-white border border-gray-300 rounded-lg shadow-md',
        className,
      )}
    >
      <div className='flex items-center px-3'>
        <IconSearch size={20} strokeWidth={1.5} className='text-gray-500' />
      </div>
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={t(placeholder)}
        className='w-full px-4 py-2 bg-white text-gray-900 border-none focus:outline-none rounded-l-lg'
      />
      <button
        type='submit'
        className={clsx(
          'px-4 py-2 rounded-r-lg focus:outline-none whitespace-nowrap',
          {
            'bg-primary text-white hover:bg-primary-dark': color === 'primary',
            'bg-secondary text-white hover:bg-secondary-dark':
              color === 'secondary',
            'bg-success text-white hover:bg-success-dark': color === 'success',
            'bg-warning text-black hover:bg-warning-dark': color === 'warning',
            'bg-error text-white hover:bg-error-dark': color === 'error',
            'bg-gray-500 text-black hover:bg-gray-800': color === 'gray',
          },
        )}
      >
        {t('Search')}
      </button>
    </form>
  )
}
