import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  //? REGISTER
  async register(req: Request, res: Response) {
    const { firstName, lastName, role, birthDate, email, password, hiredAt } =
      req.body;

    // Check if the email is unique
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

  //? GETDATA ALL STAFF
  async getAllStaff(req: Request, res: Response) {
    // If undefined, put default value, if not then convert it to numeber

    const page =
      req.query.page === undefined ? 1 : Number(req.query.page as string);
    const limit =
      req.query.limit === undefined ? 10 : Number(req.query.limit as string);

    const { allStaff, totalData, currentPage } = await authService.getAllStaff({
      page,
      limit,
    });

    res.status(200).json({
      success: true,
      message: "Fetch staff data is successful",
      data: { currentPage, totalData, allStaff },
    });
  },
};
