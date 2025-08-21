export default function CreateGroupOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Create Group</h2>
        <p className="mb-4">Fill in details to create a new group.</p>
        <a href="/homepage" className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </a>
      </div>
    </div>
  );
}
