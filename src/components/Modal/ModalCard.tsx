import React, { FC, ReactNode } from 'react'

interface ModalCardProps {
  active: boolean
  setActive: (active: boolean) => void
  children?: ReactNode
}

export const ModalCard: FC<ModalCardProps> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <>
      {active ? (
        <div
          className='flex items-center justify-center w-screen h-screen fixed bg-black/20 left-0 top-0'
          onClick={() => setActive(false)}
        >
          <div onClick={e => e.stopPropagation()}>{children}</div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
