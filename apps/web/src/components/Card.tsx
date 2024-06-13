import clsx from 'clsx'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  border?: boolean
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'gray'
    | 'white'
  fullWidth?: boolean
  className?: string
}

export const Card = ({
  children,
  color = 'white',
  border,
  fullWidth,
  className,
}: CardProps) => {
  return (
    <div
      className={clsx(
        'p-8 rounded-lg shadow-lg overflow-hidden',
        {
          'bg-primary-lighter': color === 'primary',
          'bg-secondary-lighter': color === 'secondary',
          'bg-info-lighter': color === 'info',
          'bg-success-lighter': color === 'success',
          'bg-warning-lighter': color === 'warning',
          'bg-error-lighter': color === 'error',
          'bg-gray-200': color === 'gray',
          'bg-white': color === 'white',
        },
        border && 'border-t-4',
        fullWidth && 'w-full',
        className,
      )}
    >
      {children}
    </div>
  )
}
