import { Request, Response } from "express";
import { memberService } from "../services/member.service";
import { catchAsync } from "../utils/catchAsync";

export const membersController = {
  createMember: catchAsync(async (req: Request, res: Response) => {
    const { firstName, lastName, address, email, phoneNumber } = req.body;

    const result = await memberService.createMember({
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
    });

    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: result,
    });
  }),

  getAllMembers: catchAsync(async (req: Request, res: Response) => {
    const page = req.query.page === undefined ? 1 : Number(req.query.page);
    const limit = req.query.limit === undefined ? 10 : Number(req.query.limit);
    const search = req.query.search as string;
    const status = req.query.status as string;

    const data = await memberService.getAllMembers({
      page,
      limit,
      search,
      status,
    });

    console.log("getAllMembers", data);

    res.status(200).json({
      success: true,
      message: "Fetch member data successfull",
      data: {
        totalData: data?.totalData,
        totalPage: data?.totalPage,
        members: data?.members,
      },
    });
  }),
};
