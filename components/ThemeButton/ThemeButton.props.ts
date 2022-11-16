import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ThemeButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: string
}