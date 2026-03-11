import { Member } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";

export const memberService = {
  async createMember({
    firstName,
    lastName,
    address,
    email,
    expirationDate,
    phoneNumber,
  }: Omit<Member, "id" | "createdAt" | "updatedAt" | "deletedAt">) {
    await prisma.member.create({
      data: {
        firstName,
        lastName,
        address,
        email,
        expirationDate,
        phoneNumber,
      },
    });
  },
};
