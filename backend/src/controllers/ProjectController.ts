import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Project } from '../entity/Project';
import { User } from '../entity/User';

const validateProjectData = (data: any) => {
    const errors = [];

    if (!data.name || data.name.length < 3 || data.name.length > 100) {
        errors.push('O nome do projeto deve ter entre 3 e 100 caracteres.');
    }

    if (!data.description || data.description.length < 10 || data.description.length > 500) {
        errors.push('A descrição do projeto deve ter entre 10 e 500 caracteres.');
    }

    if (data.progress < 0 || data.progress > 100) {
        errors.push('O progresso deve ser um valor entre 0 e 100.');
    }

    return errors;
};

export const listProjects = async (req: Request, res: Response) => {
    const projectRepository =  AppDataSource.getRepository(Project);
    const projects = await projectRepository.find({ relations: ['user']} );
    res.json({ data: projects});
}

