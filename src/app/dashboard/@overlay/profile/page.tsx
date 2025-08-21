export default function ProfileOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <p className="mb-4">User profile details will go here.</p>
        <a href="/homepage" className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </a>
      </div>
    </div>
  );
}
