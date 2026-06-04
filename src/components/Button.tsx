import type { AnchorHTMLAttributes, ReactNode } from "react"

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Button = ({ children, className, ...rest }: IProps) => {
  return (
    <a className={`px-4 py-2 rounded-md ${className || ''}`} {...rest}>
      {children}
    </a>
  )
}

export default Button