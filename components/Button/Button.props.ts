import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,"onAnimationStart" | "onDragStart" |"onDragEnd" | "onDrag" | "ref"> 

{
    children: React.ReactNode
    appearence: "primary" | "ghost"
    arrow?: 'right' | 'down' | 'none'
}