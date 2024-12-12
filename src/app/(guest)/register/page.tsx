import React from 'react'
import { RegisterFormSection } from './RegisterFormSection'
import { Container, Stack, Typography } from '@mui/material'

export default function Login() {
  return (
    <Container>
      <Stack 
        gap={3} 
        alignContent={'center'} 
        sx={{
          marginTop: 2,
        }}
      >
          <Typography
            component="h1"
            variant="h3"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Register
          </Typography>
        <RegisterFormSection/>
      </Stack>
    </Container>
  )
}
