import clsx from 'clsx'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'gray'
}

export const Card = ({ children, color = 'primary' }: CardProps) => {
  return (
    <div
      className={clsx('rounded-lg shadow-lg overflow-hidden', {
        'bg-primary-lighter': color === 'primary',
        'bg-secondary-lighter': color === 'secondary',
        'bg-info-lighter': color === 'info',
        'bg-success-lighter': color === 'success',
        'bg-warning-lighter': color === 'warning',
        'bg-error-lighter': color === 'error',
        'bg-gray-200': color === 'gray',
      })}
    >
      {children}
    </div>
  )
}
