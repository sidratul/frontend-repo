'use client'
import { useGetUserDetail } from '@/api/users/user.api'
import { Button, Stack } from '@mui/material';
import React, { createContext, useContext, useState } from 'react'
import { UserContentDetail } from './UserContentDetail';

interface UserContentContextProps {
  load: boolean;
}

const UserContentContext = createContext({} as UserContentContextProps);
export const useUserContentContext = () => useContext(UserContentContext);

export const UserContent = () => {
  const [load, setLoad] = useState(false);
  const { mutate } = useGetUserDetail(load);

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
        <UserContentDetail/>
      </Stack>
    </UserContentContext.Provider>
  )
}
