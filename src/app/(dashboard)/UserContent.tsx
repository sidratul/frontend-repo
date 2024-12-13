'use client'
import { useGetUserDetail } from '@/api/users/user.api'
import { Button, Stack, Typography } from '@mui/material';
import React, { createContext, useContext, useState } from 'react'
import { UserContentDetail } from './UserContentDetail';

interface UserContentContextProps {
  load: boolean;
}

const UserContentContext = createContext({} as UserContentContextProps);
export const useUserContentContext = () => useContext(UserContentContext);

export const UserContent = () => {
  const [load, setLoad] = useState(false);
  const { mutate, error, isLoading } = useGetUserDetail(load);

  const onClick = () => {
    if (!load) {
      setLoad(true);
    } else {
      mutate();
    }
  }

  return (
    <UserContentContext.Provider
      value={{
        load,
      }}
    >
      <Stack>
        <Button onClick={onClick} variant='contained'>Load Data</Button>
        {
          error && (
            <Typography color='error'>{error.message}</Typography>
          )
        }

        {
          isLoading && (
            <Typography color='info'>Loading...</Typography>
          )
        }
        <UserContentDetail/>
      </Stack>
    </UserContentContext.Provider>
  )
}
