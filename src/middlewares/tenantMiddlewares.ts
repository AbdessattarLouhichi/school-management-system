import { Request, Response, NextFunction } from 'express';

export const tenantMiddleware = (req: Request, res: Response, next: NextFunction): void=> {
  const tenantId = req.headers['x-tenant-id'];
  if (!tenantId) {
     res.status(400).json({ error: 'Tenant ID is required' });
  } else{
  req.params.tenantId = tenantId as string;
  next();
  }
};