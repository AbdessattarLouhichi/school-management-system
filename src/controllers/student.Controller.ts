import { Request, Response } from 'express';
import Student from '../models/Student';

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create({ ...req.body, tenantId: req.params.tenantId });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error? error.message : "Failed to do something exceptional" });
  }
};

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll({ where: { tenantId: req.params.tenantId } });
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};


export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
       res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
       res.status(404).json({ error: 'Student not found' });
    }
    await student?.update(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
       res.status(404).json({ error: 'Student not found' });
    }
    await student?.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
