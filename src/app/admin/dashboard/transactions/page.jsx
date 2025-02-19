"use client";

import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

const AdminTransactions = () => {
  const { allTransactions, updateTransactionStatus } = useUser();
  const [loading, setLoading] = useState(false);

  // Sort transactions: Pending first, then all others
  const sortedTransactions = [...allTransactions].sort((a, b) => {
    return a.status === "pending" ? -1 : 1; // Pending transactions come first
  });

  // Handle transaction approval or rejection
  const handleUpdateStatus = async (transactionId, newStatus) => {
    setLoading(true);
    await updateTransactionStatus(transactionId, newStatus);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Transactions</h2>

      {sortedTransactions.length === 0 ? (
        <p className="text-gray-500">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">#</th>
                <th className="border p-3 text-left">User</th>
                <th className="border p-3 text-left">Amount</th>
                <th className="border p-3 text-left">Type</th>
                <th className="border p-3 text-left">Currency</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transaction, index) => (
                <tr key={transaction._id} className="hover:bg-gray-50">
                  <td className="border p-3">{index + 1}</td>
                  <td className="border p-3">{transaction.user.email}</td>
                  <td className="border p-3">${transaction.amount.toFixed(2)}</td>
                  <td className="border p-3 capitalize">{transaction.type}</td>
                  <td className="border p-3">{transaction.name}</td>
                  <td className={`border p-3 font-semibold ${transaction.status === "pending" ? "text-yellow-500" : transaction.status === "successful" ? "text-green-500" : "text-red-500"}`}>
                    {transaction.status}
                  </td>
                  <td className="border p-3">
                    {new Date(transaction.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border p-3">
                    {transaction.status === "pending" ? (
                      <div className="flex gap-2">
                        <button 
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition disabled:opacity-50"
                          onClick={() => handleUpdateStatus(transaction._id, "successful")}
                          disabled={loading}
                        >
                          Confirm
                        </button>
                        <button 
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
                          onClick={() => handleUpdateStatus(transaction._id, "failed")}
                          disabled={loading}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400">No action needed</span>
                    )}
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

export default AdminTransactions;
