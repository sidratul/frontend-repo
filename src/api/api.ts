'use client'

import { logout } from '@/app/actions';
import UseSwr from 'swr';
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  }

  if(res.status === 401) {
    return logout();
  }
  
  throw new Error(resJson?.data?.message || 'Error');
}

export const getSwr = <T>(url: string | null) => {
  return UseSwr<T>(url, fetcher);
}