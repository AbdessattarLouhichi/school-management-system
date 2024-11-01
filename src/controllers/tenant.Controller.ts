import { Request, Response } from 'express';
import Tenant from '../models/Tenant';

export const createTenant = async (req: Request, res: Response) => {
  try {
    const tenant = await Tenant.create(req.body);
    res.status(201).json(tenant);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error? error.message : "Failed to do something exceptional"});
  }
};

export const getTenants = async (req: Request, res: Response) => {
  try {
    const tenants = await Tenant.findAll();
    res.status(200).json(tenants);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error? error.message : "Failed to do something exceptional"});
  }
};

// Other tenant-related controllers...
