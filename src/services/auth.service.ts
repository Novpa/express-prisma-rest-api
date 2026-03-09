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
};
