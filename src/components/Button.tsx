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
        variant === 'filled' && `bg-${color} text-white hover:bg-${color}-dark`,
        variant === 'outlined' &&
          `border border-${color} text-${color} hover:bg-${color}-light`,
        variant === 'text' && `text-${color} hover:text-${color}-dark`,
        size === 'xs' && 'px-2 py-1 text-xs',
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-2 text-md',
        size === 'lg' && 'px-5 py-3 text-lg',
        size === 'xl' && 'px-6 py-4 text-xl',
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
