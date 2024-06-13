import { IconX } from '@tabler/icons-react'
import clsx from 'clsx'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { ActionIcon } from './ActionIcon.tsx'

type ModalProps = {
  children: ReactNode
  open: boolean
  title?: string
  onClose: () => void
  disableEscapeKey?: boolean
  disableBackdropClick?: boolean
  className?: string
}

export const Modal = ({
  children,
  open,
  title,
  onClose,
  disableEscapeKey = false,
  disableBackdropClick = false,
  className,
}: ModalProps) => {
  if (!open) {
    return null
  }

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !disableBackdropClick) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && !disableEscapeKey) {
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
      className={clsx(
        'fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50',
        className,
      )}
    >
      <div
        onClick={handleModalClick}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        className='bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
      >
        <div className={'flex justify-between py-2 px-2'}>
          <div className={'text-xl'}>{title}</div>
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
