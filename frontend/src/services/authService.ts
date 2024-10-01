import { api } from '../api';
import type { AuthData, User } from '../types';

export async function register(data: AuthData): Promise<User | Error>{
  try {
    const response = await api.post(`/register`, data);
    return response.data.data
  } catch (error) {
    return error as Error;
  }
};
