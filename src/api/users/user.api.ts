import { User } from '@/types/user.types';
import * as api from '../api';

export const useGetUserDetail = (load?: boolean) => {
  return api.getSwr<User>(!load ? null : '/api/users/profile');
}
