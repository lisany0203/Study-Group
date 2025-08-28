import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/utils/supabase/serverClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ message: "Name, email, and password are required." });

  try {
    // Create user and auto-confirm
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    });

    if (error) return res.status(400).json({ message: error.message });

    // Insert into profiles table
    await supabaseAdmin.from("profiles").insert({
      id: data.user.id,
      name,
      email: data.user.email,
    });

    return res.status(201).json({
      message: "Sign up successful! You can log in immediately.",
      user: data.user,
    });
  } catch (err: any) {
    console.error("Sign up API error:", err.message);
    return res.status(500).json({ message: "Internal server error", details: err.message });
  }
}
