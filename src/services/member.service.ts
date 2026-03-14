import { addMonths } from "date-fns";
import { Member } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";
import { getAllMembersQuery } from "../types/memberTypes";
import { handlePrismaError } from "../utils/prismaErrorHandler";
import { AppError } from "../utils/AppError";
import { createMemberDto } from "../dto/memberDto";

export const memberService = {
  async createMember({
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
  }: createMemberDto) {
    try {
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
    } catch (error) {
      handlePrismaError(error);
    }
  },

  async getAllMembers({ page, limit, search, status }: getAllMembersQuery) {
    try {
      const where: any = {
        deletedAt: null,
      };

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

      if (isNaN(page) || isNaN(limit)) {
        throw new AppError(
          400,
          "Invalid request >> params, page, & limit must be numbers",
        );
      }

      const offset = (page - 1) * limit;

      const members = await prisma.member.findMany({
        take: limit,
        skip: offset,
        where,
      });

      const totalMembers = await prisma.member.count({
        where,
      });

      return {
        members,
        totalData: totalMembers,
        totalPage: Math.ceil(totalMembers / limit),
      };
    } catch (error) {
      handlePrismaError(error);
    }
  },
};
