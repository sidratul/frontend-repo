import { useGetUserDetail } from '@/api/users/user.api';
import React from 'react'
import { useUserContentContext } from './UserContent';

export const UserContentDetail = () => {
  const { load } = useUserContentContext();
  const { data, error, isLoading, mutate } = useGetUserDetail(load);

  if(error) {
    console.log('error', error)
  }

  return (
    <div>        
      xxxx {JSON.stringify(data)}
    </div>
  )
}
