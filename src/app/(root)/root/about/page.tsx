import React from 'react';
import BackButton from '@/components/backbutton';

export default function About() {
  return (
    // We add 'relative' here to make the absolutely positioned button
    // position itself relative to this container.
    <div className="relative p-10 pr-50">
      {/* The BackButton is now positioned absolutely within its parent div. */}
      {/* top-4 and left-4 give it a little space from the top-left corner. */}
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>

      <div className='pt-20'>
        <h1 className="text-2xl font-bold mb-4">About Us</h1>

      <p className="text-left whitespace-pre-wrap text-gray-700 leading-relaxed">
        Welcome to KoStudy a platform built to make studying together simple and
        stress-free. We know how challenging it can be to coordinate with
        classmates, find the right time, and stay productive. That’s why we
        created a tool that helps students: 
        - Schedule study sessions effortlessly
        - Invite friends or classmates with a single click
        - Organize groups by subject or course
        - Stay on track with tasks and reminders
        Our mission is to help students save time, collaborate better, and achieve more whether
        preparing for exams, working on group projects, or just learning together.
        We believe studying doesn’t have to be complicated. With the right tools,
        it can be organized, focused, and fun.
      </p>
      
      <div className="mt-6 flex gap-4">
        <img
          src="/images/about1.jpg"
          alt="About image 1"
          className="w-1/3 h-32 object-cover rounded"
        />
        <img
          src="/images/about2.jpg"
          alt="About image 2"
          className="w-1/3 h-32 object-cover rounded"
        />
        <img
          src="/images/about3.jpg"
          alt="About image 3"
          className="w-1/3 h-32 object-cover rounded"
        />
      </div>
      </div>
    </div>
  );
}
