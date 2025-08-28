import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/utils/supabase/serverClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password are required." });

  try {
    // Sign in with Supabase admin client
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return res.status(401).json({ message: "Invalid email or password." });

    return res.status(200).json({
      message: "Login successful!",
      user: data.user,
      session: data.session,
    });
  } catch (err: any) {
    console.error("Login API error:", err.message);
    return res.status(500).json({ message: "Internal server error", details: err.message });
  }
}
