import type { AnchorHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router"

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Button = ({ children, className, href, ...rest }: IProps) => {
  return (
    <Link to={href || "#"} className={`bg-orange-400 text-white px-4 py-2 rounded-md ${className || ''}`} {...rest}>
      {children}
    </Link>
  )
}

export default Button