import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/utils/supabase/serverClient'; // Make sure this uses service role key

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, subject, description, visibility, userId } = req.body;

  if (!name || !subject || !description || !visibility || !userId) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const { data: group, error } = await supabaseAdmin
      .from('groups')
      .insert([{ name, subject, description, visibility, owner: userId }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ message: 'Group created successfully', group });
  } catch (error: any) {
    console.error('Create group error:', error.message);
    res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}
