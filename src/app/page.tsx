import { redirect } from "next/navigation";
import { getRole } from "@/app/actions/auth";

export default async function Home() {
  const role = await getRole();

  if (role === "gordon") {
    redirect("/jason");
  } else if (role === "foster") {
    redirect("/Foster");
  } else {
    redirect("/login");
  }
}
