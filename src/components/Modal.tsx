import { IconX } from '@tabler/icons-react'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { ActionIcon } from './ActionIcon.tsx'
import { Typography } from './Typography.tsx'

type ModalProps = {
  children: ReactNode
  open: boolean
  title?: string
  onClose: () => void
}

export const Modal = ({ children, open, title, onClose }: ModalProps) => {
  if (!open) {
    return null
  }

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key)
    if (e.key === 'Escape') {
      onClose()
    }
  }
  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className='fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black opacity-[0.5]'
    >
      <div
        onClick={handleModalClick}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        className='bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
      >
        <div className={'flex justify-between py-2 px-2'}>
          <Typography variant={'h5'}>{title}</Typography>
          <ActionIcon
            icon={<IconX color={'gray'} />}
            variant={'white'}
            onClick={onClose}
          />
        </div>
        <hr />
        {children}
      </div>
    </div>
  )
}
