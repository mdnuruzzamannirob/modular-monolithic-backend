import { Request, Response, NextFunction } from 'express';

const requestId = async (req: Request, res: Response, next: NextFunction) => {
  const { v4: uuid } = await import('uuid'); // dynamic import
  (req as any).requestId = uuid();
  res.setHeader('x-request-id', (req as any).requestId);
  next();
};

export default requestId;
