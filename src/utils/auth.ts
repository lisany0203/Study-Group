import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

// GET USER
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data.user;
}

// GET SESSION
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return data.session;
}

// IS AUTHENTICATED
export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

// GET USER METADATA
export async function getUserMetadata() {
  const user = await getUser();
  return user?.user_metadata;
}

// UPDATE USER METADATA
export async function updateUserMetadata(metadata: object) {
  const { data, error } = await supabase.auth.updateUser({
    data: metadata,
  });

  if (error) throw new Error(error.message);
  return data;
}

// ON AUTH STATE CHANGE
export function onAuthStateChange(callback: (user: any) => void) {
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      callback(session?.user ?? null);
    }
  );

  return authListener;
}

