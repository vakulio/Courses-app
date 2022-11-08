import { HTMLAttributes, DetailedHTMLProps } from "react"

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "small" | "medium"
    children: React.ReactNode
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
    href?: string
}