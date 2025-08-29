// import { NextApiRequest, NextApiResponse } from "next";
// import { supabaseAdmin } from "@/utils/supabase/serverClient";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: "Email and password are required." });

//   try {
//     // Sign in with Supabase admin client
//     const { data, error } = await supabaseAdmin.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) return res.status(401).json({ message: "Invalid email or password." });

//     return res.status(200).json({
//       message: "Login successful!",
//       user: data.user,
//       session: data.session,
//     });
//   } catch (err: unknown) {
//     console.error("Login API error:", (err as Error).message);
//     return res.status(500).json({ message: "Internal server error", details: (err as Error).message });
//   }
// }


// /pages/api/auth/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/utils/supabase/serverClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  try {
    // Create user (with confirmation email or auto-confirm)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: false, // set true if you want to auto-confirm
      user_metadata: { name },
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    // Insert into `profiles` table
    await supabaseAdmin.from("profiles").insert({
      id: data.user?.id,
      email: data.user?.email,
      name,
    });

    return res.status(201).json({
      message: "Sign up successful! Please check your email to confirm.",
      user: data.user,
    });
  } catch (err: unknown) {
    console.error("Sign up API error:", (err as Error).message);
    return res.status(500).json({
      message: "Internal server error",
      details: (err as Error).message,
    });
  }
}
