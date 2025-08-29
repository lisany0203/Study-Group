'use client'; // This directive is necessary to use client-side hooks like Link

// import Link from 'next/link'; // Import the Link component for navigation
import React, { useEffect, useState } from "react";
// import { createClient } from '@/utils/supabase/client';
import { supabase } from '@/utils/supabase/client';

export default function Homepage() {
      // const supabase = createClient();  
      // const [showOptions, setShowOptions] = useState(false);
      const [showCreateModal, setShowCreateModal] = useState(false);
      const [showJoinModal, setShowJoinModal] = useState(false);
      const [groupName, setGroupName] = useState('');
      const [subject, setSubject] = useState('');
      const [description, setDescription] = useState('');
      const [visibility, setVisibility] = useState<'public' | 'private'>('public');
      const [loading, setLoading] = useState(false);
      const [groups, setGroups] = useState<unknown[]>([]);
      const [loadingGroups, setLoadingGroups] = useState(true);
      
      const fetchGroups = async () => {
        setLoadingGroups(true);
        const { data, error } = await supabase
          .from('groups')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.log('Error fetching groups:', error.message);
        } else {
          setGroups(data);
        }
        setLoadingGroups(false);
      };

      useEffect(() => {
        fetchGroups();
      }, []);

      // Handle create group
      const handleCreateGroup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
          const response = await fetch('/api/groups/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: groupName,
              subject,
              description,
              visibility,
              userId: 'any-random-id-or-empty', // you can just put a placeholder for now
            }),
          });

          const data = await response.json();
          if (!response.ok) throw new Error(data.message || 'Failed to create group');

          alert('Group created: ' + data.group.name);
          setShowCreateModal(false);
          setGroupName('');
          setSubject('');
          setDescription('');
        } catch (err: unknown) {
          alert((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

  return (
    <>
      
    <main className="flex-1 p-10">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to KoStudy</h1>
        <p className="text-lg text-gray-600">
          Your personal study groups scheduler. Join existing group or create new group to collaborate with fellow students.
        </p>

        {/* Two-block layout from your original design */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 bg-white">
          <div className="flex-1 bg-[#EEF7FA] p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Create a New Group</h2>
            <p className="text-lg text-gray-600">
              Create your own group and invite others to join. Set schedule, topic, and goals.
            </p>
            <button
            type="button"
            aria-label="Create group"
            onClick={() => setShowCreateModal(true)}
            className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block text-center"
          >
            Create Group
          </button>
          </div>

          <div className="flex-1 bg-[#FBF6F1] p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Join a Study Group</h2>
            <p className="text-lg text-gray-600">
              Find and join existing study groups that match your interest and schedule.
            </p>
            <button
            type="button"
            aria-label="Join group"
            onClick={() => setShowJoinModal(true)}
            className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block text-center"
          >
            Join Group
          </button>
          </div>
        </div>

        {/* Create Group Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-lg w-96 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Create New Group</h2>
                <button 
                  onClick={() => setShowCreateModal(false)} 
                  className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
                >
                  &times;
                </button>
              </div>
              <form className="space-y-4" onSubmit={handleCreateGroup}>
                <div>
                  <label htmlFor="group-name" className="block text-sm font-semibold text-gray-700 mb-1">Group Name</label>
                  <input
                    id="group-name"
                    type="text"
                    placeholder="Name"
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
                  />
                </div>
                <div>
                  <label htmlFor="subject-name" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                  <input
                    id="subject-name"
                    type="text"
                    placeholder="Subject Name"
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
                  />
                </div>
                <div>
                  <label htmlFor="descriptions" className="block text-sm font-semibold text-gray-700 mb-1">Descriptions</label>
                  <textarea
                    id="descriptions"
                    placeholder="write anything"
                    className="w-full h-24 text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input type="radio" name="visibility" value="public" defaultChecked className="form-radio text-[#2CA6A4] focus:ring-[#2CA6A4] h-4 w-4" />
                    <span>Public</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-gray-700">
                    <input type="radio" name="visibility" value="private" className="form-radio text-[#2CA6A4] focus:ring-[#2CA6A4] h-4 w-4" />
                    <span>Private</span>
                  </label>
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-6 py-2 rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[#2CA6A4] text-white hover:bg-[#2CA6A4]/90 transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}


              {/* Join Group Modal */}
        {showJoinModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-lg w-96 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Join Group</h2>
                <button
                  onClick={() => setShowJoinModal(false)}
                  className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
                >
                  &times;
                </button>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="join-code" className="block text-sm font-semibold text-gray-700 mb-1">Code</label>
                  <input
                    id="join-code"
                    type="text"
                    placeholder="code"
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
                  />
                </div>
                <div className="flex items-center justify-center relative my-4">
                  <div className="w-full h-px bg-gray-300"></div>
                  <span className="absolute px-4 text-gray-400 bg-white text-sm font-semibold">
                    OR
                  </span>
                </div>
                <div>
                  <label htmlFor="join-link" className="block text-sm font-semibold text-gray-700 mb-1">Link</label>
                  <input
                    id="join-link"
                    type="text"
                    placeholder="link"
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
                  />
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
                    className="px-6 py-2 rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[#2CA6A4] text-white hover:bg-[#2CA6A4]/90 transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
    </>
  );
}
