import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Role } from '../config/Roles';


export const authenticate = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded as User;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

export const authorize = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
       res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};