import clsx from 'clsx'

type DividerProps = {
  absolute?: boolean
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
}

export const Divider = ({
  absolute = false,
  orientation = 'horizontal',
  variant = 'solid',
}: DividerProps) => {
  return (
    <hr
      className={clsx('border-gray-300', {
        'border-t': orientation === 'horizontal',
        'border-l': orientation === 'vertical',
        'border-dashed': variant === 'dashed',
        'border-dotted': variant === 'dotted',
        absolute: absolute,
      })}
    />
  )
}
