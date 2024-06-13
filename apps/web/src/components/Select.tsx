import clsx from 'clsx'
import type { ChangeEvent, ReactNode } from 'react'

type SelectProps = {
  children: ReactNode
  value?: string
  autoWidth?: boolean
  disabled?: boolean
  defaultValue?: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  children,
  value,
  autoWidth = false,
  disabled = false,
  defaultValue,
  className,
  onChange,
}: SelectProps) => {
  return (
    <div className={clsx('relative', autoWidth ? 'inline-block' : 'w-full')}>
      <select
        className={clsx(
          'block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm',
          className,
        )}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        {children}
      </select>
    </div>
  )
}
