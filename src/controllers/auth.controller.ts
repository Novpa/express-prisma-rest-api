import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  async register(req: Request, res: Response) {
    const { firstName, lastName, role, birthDate, email, password, hiredAt } =
      req.body;

    await authService.register({
      firstName,
      lastName,
      role,
      birthDate: new Date(birthDate),
      email,
      password,
      hiredAt: new Date(hiredAt),
    });

    res.status(201).json({
      success: true,
      message: "Registered staff account successfully",
      data: {
        firstName,
        lastName,
      },
    });
  },
};
