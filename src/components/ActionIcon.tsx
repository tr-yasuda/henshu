import clsx from 'clsx'
import type { ReactNode } from 'react'

type ActionIconProps = {
  icon: ReactNode
  variant?: 'filled' | 'outlined' | 'white'
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  type?: 'button' | 'submit' | 'reset'
  onClick: () => void
  'aria-label'?: string
}

export const ActionIcon = ({
  icon,
  variant = 'outlined',
  color = 'primary',
  type = 'button',
  'aria-label': ariaLabel,
  onClick,
}: ActionIconProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        'px-2 py-1 rounded-md text-white',
        variant === 'filled' && `bg-${color} hover:bg-${color}-dark`,
        variant === 'outlined' &&
          `border border-${color} text-white hover:bg-${color}-lighter`,
        variant === 'white' &&
          `bg-white text-${color} hover:bg-${color}-lighter`,
      )}
      type={type}
    >
      {icon}
    </button>
  )
}
