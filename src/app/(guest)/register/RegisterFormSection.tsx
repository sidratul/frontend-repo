'use client';

import { UserLogin } from '@/types/user.types'
import React from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { RegisterForm } from '@/components/forms';


export const RegisterFormSection = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  console.log('error', error, user);

  // if (error) {
  //   console.log('error', error);
  // }

  const onSubmit = async (data: UserLogin) => {
    const user = await createUserWithEmailAndPassword(data.email, data.password);
    console.log("user", user);
  }

  return (
    <RegisterForm
      loading={loading}
      onSubmit={onSubmit}
    />
  )
}
