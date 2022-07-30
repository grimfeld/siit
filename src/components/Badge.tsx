import React from 'react'
interface BadgeProps {
  content: string
  className?: string
  handleClose?: () => void
}


const Badge = ({ content, className, handleClose }: BadgeProps): JSX.Element => {

  return (
    <div className={['rounded-lg px-4 py-1 flex items-center', className].join(' ')}>
      {content}
      {handleClose && <i className='ml-2 cursor-pointer bx bx-x' onClick={handleClose} />}
    </div>
  )
}

export default Badge