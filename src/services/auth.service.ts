import { Staff } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";

export const authService = {
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

  async findUniqueEmail(email: string) {
    const isUnique = await prisma.staff.findUnique({ where: { email: email } });
    return isUnique;
  },
};
