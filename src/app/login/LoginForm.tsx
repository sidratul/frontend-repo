'use client';

import Form, { FormFieldProps, } from '@/components/Form'
import { TextInput } from '@/components/inputs/TextInput'
import { UserLogin } from '@/types/user.types'
import React from 'react'

const loginFormProps: FormFieldProps<UserLogin> = {
  email: {
    input: TextInput,
  },
  password: {
    input: TextInput
  }
}

export const LoginForm = () => {
  const onSubmit = (data: UserLogin) => {
    console.log("data", data);
  }

  return (
    <Form
      fields={loginFormProps}
      submitLabel='Login'
      onSubmit={onSubmit}
    />
  )
}
