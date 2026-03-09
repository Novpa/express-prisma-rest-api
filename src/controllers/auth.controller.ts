import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import prisma from "../config/prisma-client.config";
import { Staff } from "../../generated/prisma/client";

export const authController = {
  async register(req: Request, res: Response) {
    const { firstName, lastName, role, birthDate, email, password, hiredAt } =
      req.body;

    //? Check if the email is unique
    const isUnique = await authService.findUniqueEmail(email);

    if (isUnique) {
      return res.status(400).json({
        success: false,
        message: "Failed to add staff, use unique & valid-email format",
        data: [],
      });
    }

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
