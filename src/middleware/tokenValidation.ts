import { Request, Response, NextFunction } from 'express'

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('x-auth-token');
  if (token !== process.env.AUTH_TOKEN) return res.status(401).send('Unauthorized.');
  next();
}