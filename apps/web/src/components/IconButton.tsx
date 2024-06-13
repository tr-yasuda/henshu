import clsx from 'clsx'
import type React from 'react'

type IconButtonProps = {
  children: React.ReactNode
  onClick: () => void
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  ariaLabel: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  color = 'primary',
  size = 'md',
  className,
  ariaLabel,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-full focus:outline-none focus:ring',
        {
          'w-6 h-6': size === 'xs',
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-12 h-12': size === 'lg',
          'w-14 h-14': size === 'xl',
        },
        {
          'text-white bg-primary hover:bg-primary-dark focus:ring-primary':
            color === 'primary',
          'text-white bg-secondary hover:bg-secondary-dark focus:ring-secondary':
            color === 'secondary',
          'text-white bg-success hover:bg-success-dark focus:ring-success':
            color === 'success',
          'text-white bg-error hover:bg-error-dark focus:ring-error':
            color === 'error',
          'text-white bg-warning hover:bg-warning-dark focus:ring-warning':
            color === 'warning',
          'text-white bg-info hover:bg-info-dark focus:ring-info':
            color === 'info',
        },
        className,
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
