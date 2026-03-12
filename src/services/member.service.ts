import { addMonths } from "date-fns";
import { Member } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";
import { getAllMembersQuery } from "../types/memberTypes";

export const memberService = {
  async createMember({
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
  }: Pick<
    Member,
    "firstName" | "lastName" | "address" | "email" | "phoneNumber"
  >) {
    const result = await prisma.member.create({
      data: {
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        expirationDate: addMonths(new Date(), 3),
      },
    });

    return result;
  },

  async getAllMembers({ page, limit, search, status }: getAllMembersQuery) {
    const where: any = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { id: search },
      ];
    }

    if (status) {
      where.status = status;
    }

    where.deletedAt = null;

    if (isNaN(page) || isNaN(limit)) {
      throw new Error("Invalid params, page & limit must be numbers");
    }

    const offset = (page - 1) * limit;

    const members = await prisma.member.findMany({
      take: limit,
      skip: offset,
      where,
      //   where: {
      //     deletedAt: null,
      //   },
    });

    const totalMembers = await prisma.member.count({
      where,
    });

    return {
      members,
      totalData: totalMembers,
      totalPage: Math.ceil(totalMembers / limit),
    };
  },
};
