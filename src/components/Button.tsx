import React from 'react'
import { Button as MuiButton } from '@mui/material'

type TButton = {
  variant: 'contained' | 'outlined' | 'text'
  color?: string
  children?: React.ReactNode
}

const Button: React.FC<TButton> = ({ variant, children }) => {
  return <MuiButton variant={variant}>{children}</MuiButton>
}

export default Button
