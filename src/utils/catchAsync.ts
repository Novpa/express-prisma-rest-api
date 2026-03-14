import { NextFunction, Request, Response } from "express";

/* 
    -- catch wrapper
*/

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
