'use client';

import Form, { FormFieldProps, } from '@/components/Form'
import { PasswordInput } from '@/components/inputs/PasswordInput/PasswordInput';
import { TextInput } from '@/components/inputs/TextInput'
import { UserLogin } from '@/types/user.types'
import React from 'react'
import * as yup from 'yup';

const loginFormProps: FormFieldProps<UserLogin> = {
  email: {
    label: 'Email',
    input: TextInput,
    validation: yup.string().email(),
  },
  password: {
    label: 'Password',
    input: PasswordInput,
    validation: yup.string().min(6),
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
