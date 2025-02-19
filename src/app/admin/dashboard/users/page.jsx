"use client";

import { useUser } from "@/contexts/UserContext";

const AdminUsers = () => {
  const {allUsers} = useUser();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Users</h2>

      {allUsers.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">#</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="border p-3">{index + 1}</td>
                  <td className="border p-3">{user.email}</td>
                  <td className="border p-3">{user.name}</td>
                  <td className="border p-3">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
