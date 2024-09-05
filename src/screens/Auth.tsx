import React from 'react'
import { Box } from '@mui/material'
import { Button } from '../components'

export const Auth = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
      <Button variant="contained">Войти как квестодатель</Button>
      <Button variant="outlined">Войти как наемник</Button>
    </Box>
  )
}
