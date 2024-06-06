"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateT(value : string) {
  revalidateTag(value);
}