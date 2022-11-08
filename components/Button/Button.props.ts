import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode
    appearence: "primary" | "ghost"
    arrow?: 'right' | 'down' | 'none'
}