import clsx from 'clsx'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  type?: 'button' | 'submit' | 'reset'
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
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `transition ease-in-out duration-150 transform rounded-md focus:outline-none focus:ring focus:ring-${color} focus:ring-opacity-50 cursor-pointer`,
        variant === 'filled' && {
          'bg-primary text-white hover:bg-primary-dark': color === 'primary',
          'bg-secondary text-white hover:bg-secondary-dark':
            color === 'secondary',
          'bg-info text-white hover:bg-info-dark': color === 'info',
          'bg-success text-white hover:bg-success-dark': color === 'success',
          'bg-warning text-white hover:bg-warning-dark': color === 'warning',
          'bg-error text-white hover:bg-error-dark': color === 'error',
        },
        variant === 'outlined' && {
          'border border-primary text-primary hover:bg-primary-light':
            color === 'primary',
          'border border-secondary text-secondary hover:bg-secondary-light':
            color === 'secondary',
          'border border-info text-info hover:bg-info-light': color === 'info',
          'border border-success text-success hover:bg-success-light':
            color === 'success',
          'border border-warning text-warning hover:bg-warning-light':
            color === 'warning',
          'border border-error text-error hover:bg-error-light':
            color === 'error',
        },
        variant === 'text' && {
          'text-primary hover:text-primary-dark': color === 'primary',
          'text-secondary hover:text-secondary-dark': color === 'secondary',
          'text-info hover:text-info-dark': color === 'info',
          'text-success hover:text-success-dark': color === 'success',
          'text-warning hover:text-warning-dark': color === 'warning',
          'text-error hover:text-error-dark': color === 'error',
        },
        {
          'px-2 py-1 text-xs': size === 'xs',
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-2 text-md': size === 'md',
          'px-5 py-3 text-lg': size === 'lg',
          'px-6 py-4 text-xl': size === 'xl',
        },
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200',
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
