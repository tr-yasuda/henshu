import type { ReactNode } from 'react'

type MenuItemProps = {
  value?: string
  children: ReactNode
}

export const MenuItem = ({ value, children }: MenuItemProps) => {
  return <option value={value}>{children}</option>
}
