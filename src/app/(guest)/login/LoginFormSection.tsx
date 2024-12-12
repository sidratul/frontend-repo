'use client';

import { UserLogin } from '@/types/user.types'
import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { LoginForm } from '@/components/forms';


export const LoginFormSection = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  console.log('error', error, user);

  // if (error) {
  //   console.log('error', error);
  // }

  const onSubmit = async (data: UserLogin) => {
    const user = await signInWithEmailAndPassword(data.email, data.password);
    console.log("user", user);
  }

  return (
    <LoginForm
      loading={loading}
      onSubmit={onSubmit}
    />
  )
}
