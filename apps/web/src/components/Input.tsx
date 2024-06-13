import clsx from 'clsx'
import type { ChangeEvent } from 'react'

type InputProps = {
  id?: string
  type?: string
  value: string
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  className?: string
  errorMessage?: string
}

export const Input = ({
  className,
  type = 'text',
  color = 'primary',
  required = false,
  errorMessage = '',
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        {...rest}
        type={type}
        className={clsx(
          'w-full px-3 py-2 my-1 border border-gray-300 rounded-lg focus:outline-none focus:ring',
          {
            'focus:ring-primary focus:border-primary': color === 'primary',
            'focus:ring-secondary focus:border-secondary':
              color === 'secondary',
            'focus:ring-success focus:border-success': color === 'success',
            'focus:ring-error focus:border-error': color === 'error',
            'focus:ring-warning focus:border-warning': color === 'warning',
            'focus:ring-info focus:border-info': color === 'info',
          },
          className,
        )}
        required={required}
      />
      {errorMessage.length > 0 && (
        <span className={'text-xs text-error'}>{errorMessage}</span>
      )}
    </>
  )
}
