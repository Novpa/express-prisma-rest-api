import { Staff } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";

export const authService = {
  //? REGISTER STAFF SERVICE
  async register({
    firstName,
    lastName,
    role,
    birthDate,
    email,
    password,
    hiredAt,
  }: Omit<Staff, "id" | "createdAt" | "updatedAt" | "deletedAt">) {
    await prisma.staff.create({
      data: { firstName, lastName, role, birthDate, email, password, hiredAt },
    });
  },

  //? FIND UNIQUE EMAIL STAFF SERVICE
  async findUniqueEmail(email: string) {
    const isUnique = await prisma.staff.findUnique({ where: { email: email } });
    return isUnique;
  },

  //? GET ALL STAFF
  async getAllStaff({ page, limit }: { page: number; limit: number }) {
    if (isNaN(page) || isNaN(limit)) {
      throw new Error("Query url : page & limit must be a number");
    }

    const offset = (page - 1) * limit;
    const allStaff = await prisma.staff.findMany({
      skip: offset,
      take: limit,
      where: { deletedAt: null },
    });
    return { allStaff, totalData: allStaff.length, currentPage: page };
  },
};
