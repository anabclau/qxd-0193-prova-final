import { api } from '../api';
import type { Project } from '../types';

export async function getProjects(): Promise<Project[] | Error> {
  try {
    const response = await api.get('/projects');
    return response.data.data;
  } catch (error) {
    return error as Error;
  }
}

export async function getProjectById(id: number): Promise<Project | Error> {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data.data;
  } catch (error) {
    return error as Error;
  }
}

