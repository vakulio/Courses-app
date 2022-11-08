import { HTMLAttributes, DetailedHTMLProps } from "react"

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: "small" | "medium" | "big"
    children: React.ReactNode

}