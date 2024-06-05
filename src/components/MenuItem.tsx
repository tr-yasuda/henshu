import type { ReactNode } from 'react'

type MenuItemProps = {
  value?: string
  children: ReactNode
  selected?: boolean
}

export const MenuItem = ({
  value,
  children,
  selected = false,
}: MenuItemProps) => {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}
