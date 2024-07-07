"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getErrorMessage } from '@/lib/utils';

export async function createPost(formData: FormData) {
  // auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // TODO: validation check (e.g. zod)

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  let data;
  try {
    // insert to database
    data = await prisma.post.create({
      data: {
        title,
        body,
      }
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  // revalidate
  revalidatePath("/posts");

  return {
    data,
  };
}