import clsx from 'clsx'
import type { ReactNode } from 'react'

type TypographyProps = {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export const Typography = ({
  children,
  variant = 'body1',
  align = 'inherit',
}: TypographyProps) => {
  return (
    <div
      className={clsx(
        'font-sans',
        variant === 'h1' && 'text-5xl',
        variant === 'h2' && 'text-4xl',
        variant === 'h3' && 'text-3xl',
        variant === 'h4' && 'text-2xl',
        variant === 'h5' && 'text-xl',
        variant === 'h6' && 'text-lg',
        variant === 'body1' && 'text-base',
        variant === 'body2' && 'text-sm',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        align === 'justify' && 'text-justify',
      )}
    >
      {children}
    </div>
  )
}
