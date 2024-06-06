import clsx from 'clsx'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'gray'
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  type = 'button',
  fullWidth = false,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'transition ease-in-out duration-150 transform rounded-md focus:outline-none focus:ring focus:ring-opacity-50 cursor-pointer',
        variant === 'filled' && {
          'bg-primary text-white hover:bg-primary-dark focus:ring-primary':
            color === 'primary',
          'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary':
            color === 'secondary',
          'bg-info text-white hover:bg-info-dark focus:ring-info':
            color === 'info',
          'bg-success text-white hover:bg-success-dark focus:ring-success':
            color === 'success',
          'bg-warning text-white hover:bg-warning-dark focus:ring-warning':
            color === 'warning',
          'bg-error text-white hover:bg-error-dark focus:ring-error':
            color === 'error',
          'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500':
            color === 'gray',
        },
        variant === 'outlined' && {
          'border border-primary text-primary hover:bg-primary-light focus:ring-primary':
            color === 'primary',
          'border border-secondary text-secondary hover:bg-secondary-light focus:ring-secondary':
            color === 'secondary',
          'border border-info text-info hover:bg-info-light focus:ring-info':
            color === 'info',
          'border border-success text-success hover:bg-success-light focus:ring-success':
            color === 'success',
          'border border-warning text-warning hover:bg-warning-light focus:ring-warning':
            color === 'warning',
          'border border-error text-error hover:bg-error-light focus:ring-error':
            color === 'error',
          'border border-gray-500 text-gray-500 hover:bg-gray-200 focus:ring-gray-500':
            color === 'gray',
        },
        variant === 'text' && {
          'text-primary hover:text-primary-dark focus:ring-primary':
            color === 'primary',
          'text-secondary hover:text-secondary-dark focus:ring-secondary':
            color === 'secondary',
          'text-info hover:text-info-dark focus:ring-info': color === 'info',
          'text-success hover:text-success-dark focus:ring-success':
            color === 'success',
          'text-warning hover:text-warning-dark focus:ring-warning':
            color === 'warning',
          'text-error hover:text-error-dark focus:ring-error':
            color === 'error',
          'text-gray-500 hover:text-gray-600 focus:ring-gray-500':
            color === 'gray',
        },
        {
          'px-2 py-1 text-xs': size === 'xs',
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-2 text-md': size === 'md',
          'px-5 py-3 text-lg': size === 'lg',
          'px-6 py-4 text-xl': size === 'xl',
        },
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200',
        fullWidth && 'w-full',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
