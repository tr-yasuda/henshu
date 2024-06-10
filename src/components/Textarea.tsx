import clsx from 'clsx'
import type { ChangeEvent } from 'react'

interface TextareaProps {
  id?: string
  value: string
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  required?: boolean
  className?: string
  errorMessage?: string
}

export const Textarea = ({
  id,
  value,
  color = 'primary',
  onChange,
  rows = 4,
  required = false,
  className,
  errorMessage,
}: TextareaProps) => {
  return (
    <>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={clsx(
          'w-full my-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring',
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
        rows={rows}
        required={required}
      />
      {errorMessage && (
        <span className={'text-xs text-error'}>{errorMessage}</span>
      )}
    </>
  )
}
