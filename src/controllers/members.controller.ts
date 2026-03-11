import { Request, Response } from "express";
import { memberService } from "../services/member.service";

export const membersController = {
  async createMember(req: Request, res: Response) {
    const { firstName, lastName, address, email, expirationDate, phoneNumber } =
      req.body;

    await memberService.createMember({
      firstName,
      lastName,
      address,
      email,
      expirationDate: new Date(expirationDate),
      phoneNumber,
    });

    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: {
        firstName,
        lastName,
        expirationDate,
      },
    });
  },
};
