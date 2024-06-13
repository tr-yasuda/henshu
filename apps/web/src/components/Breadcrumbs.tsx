import { Children, type ReactNode } from 'react'

type BreadcrumbsProps = {
  children: ReactNode
  separator?: string
  className?: string
}

export const Breadcrumbs = ({
  children,
  separator = '/',
  className,
}: BreadcrumbsProps) => {
  const separatorElement = (
    <span key='separator' className='mx-2 text-gray-400'>
      {separator}
    </span>
  )

  return (
    <nav aria-label='Breadcrumb' className={className}>
      <div className='flex items-center space-x-2'>
        {Children.toArray(children).reduce(
          (acc: ReactNode[], curr: ReactNode, index: number) => {
            return index === 0 ? [curr] : acc.concat([separatorElement, curr])
          },
          [],
        )}
      </div>
    </nav>
  )
}
