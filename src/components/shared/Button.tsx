import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  link?: string
  text?: string
  icon?: React.ReactNode
}

const Button = ({ link, text, icon }: ButtonProps) => {
  return (
    <Link href={link || '#'} className='flex items-center mr-4' target='_blank'>
      {icon && <span className='mr-2'>{icon}</span>}
      {text}
    </Link>
  )
}

export default Button
