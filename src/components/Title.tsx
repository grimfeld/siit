import React from 'react'

const Title = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <h2 className={['text-2xl font-bold uppercase', className].join(' ')}>{children}</h2>
  )
}

export default Title