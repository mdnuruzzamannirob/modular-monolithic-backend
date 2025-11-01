import { Response } from "express";

export interface Meta {
  requestId?: string;
  timestamp?: string;
  page?: number;
  perPage?: number;
  total?: number;
}

export interface SendResponseOptions<T> {
  res: Response;
  status?: number;
  message?: string;
  data?: T | null;
  meta?: Meta;
}
