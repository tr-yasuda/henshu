import { Children, type ReactNode } from 'react'

type BreadcrumbsProps = {
  children: ReactNode
  separator?: string
}

export const Breadcrumbs = ({
  children,
  separator = '/',
}: BreadcrumbsProps) => {
  const separatorElement = (
    <span className='mx-2 text-gray-400'>{separator}</span>
  )

  return (
    <div>
      {Children.toArray(children).reduce(
        (acc: ReactNode[], curr: ReactNode, index: number) => {
          return index === 0 ? [curr] : acc.concat([separatorElement, curr])
        },
        [],
      )}
    </div>
  )
}
