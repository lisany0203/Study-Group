import React from 'react'

export default function About() {
  return (
    <div className="p-10 pr-50">
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
      <pre className="text-left whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
  {/* preformatted text */}
</pre>

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
  )
}