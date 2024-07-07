"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getErrorMessage } from '@/lib/utils';

export async function createPost(formData: FormData) {
  // auth check
  const { isAuthenticated, getUser, getIdToken } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const idToken = await getIdToken();
  const user = await getUser();
  const name = (idToken as { preferred_username?: string })['preferred_username'];

  // TODO: validation check (e.g. zod)

  const title = formData.get("title") as string;
  const genre = formData.get("genre") as string;
  const song = formData.get("song") as string;
  const artist = formData.get("artist") as string;
  const spotifyLink = formData.get("spotifyLink") as string;
  const soundCloudLink = formData.get("soundCloudLink") as string;
  const youTubeLink = formData.get("youTubeLink") as string;
  const body = formData.get("body") as string;
  const username = name as string;
  const userId = user?.id as string;

  let data;
  try {
    // insert to database
    data = await prisma.post.create({
      data: {
        title,
        genre,
        song,
        artist,
        spotifyLink,
        soundCloudLink,
        youTubeLink,
        body,
        username,
        userId,
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