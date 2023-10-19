import { ReactNode } from 'react'

interface IconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  icon: ReactNode
}

export const IconButton = ({ link, icon, ...restProps }: IconButtonProps) => {
  return (
    <a
      href={link}
      rel='noopener noreferrer'
      className='px-1 underline hover:text-cyan-500'
      {...restProps}
    >
      {icon}
    </a>
  )
}
