import clsx from 'clsx'
import type { ChangeEvent } from 'react'

type InputProps = {
  id?: string
  type: string
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  className?: string
  errorMessage?: string
}

export const Input = ({
  className,
  required = false,
  errorMessage,
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        {...rest}
        className={clsx(
          'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-primary',
          className,
        )}
        required
      />
      {errorMessage && (
        <span className={'text-xs text-error'}>{errorMessage}</span>
      )}
    </>
  )
}
