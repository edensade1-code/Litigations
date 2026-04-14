"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface User {
  email: string;
  password: string;
  role: string; // cookie value & routing key
  homePath: string;
}

const USERS: User[] = [
  {
    email: "jg@jgordonlegal.com",
    password: "Gordon2026!",
    role: "gordon",
    homePath: "/jason/rutledge",
  },
  {
    email: "michael@youngfoster.com",
    password: "Foster2026!",
    role: "foster",
    homePath: "/Foster",
  },
];

const COOKIE_NAME = "litigation_session";

export async function login(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please enter both email and password." };
  }

  const user = USERS.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase().trim() &&
      u.password === password
  );

  if (!user) {
    return { error: "Invalid email or password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  redirect(user.homePath);
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/login");
}

export async function getRole(): Promise<string | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);
  return session?.value ?? null;
}
