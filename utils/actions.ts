"use server";
import { revalidatePath } from "next/cache";
import db from "./db";
export const newTodo = async (formData: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get("content"),
    },
  });
  revalidatePath(
    "/todo"
  ); /* as /todo page is cached we are not using any fetch or something inside that
   so inorder to tell nextjs for soft rendering which mean nextjs we expire the cache that forces
    page to get all datas again  */
};
