"use client";
import { Users } from "lucide-react";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";

const uesrSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  const { setAllUsers, setAllTransactions, allUsers, allTransactions, admin } = useUser();
  const [transactions, setTransactions] = useState([]);

  // Helper functions to calculate users created today and this week
  const calculateDateStats = (data) => {
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // Start of today's date
    const oneWeekAgo = new Date(today.setDate(today.getDate() - 7)); // Start of the week

    const createdToday = data.filter((user) => {
      const createdAtDate = new Date(user.createdAt);
      return createdAtDate >= startOfToday;
    });

    const createdThisWeek = data.filter((user) => {
      const createdAtDate = new Date(user.createdAt);
      return createdAtDate >= oneWeekAgo;
    });

    return {
      todayCount: createdToday.length,
      weekCount: createdThisWeek.length,
    };
  };

  // Calculate stats for users and coaches
  const userStats = calculateDateStats(allUsers);
  const transactionStats = calculateDateStats(allTransactions);

  const cardData = [
    {
      label: "All Users",
      amount: `${allUsers ? allUsers.length : 0}`,
      discription: `+${userStats.todayCount} today - +${userStats.weekCount} this week`,
      icon: Users,
    },
    {
      label: "Transactions",
      amount: `${allTransactions ? allTransactions.length : 0}`,
      discription: `+${transactionStats.todayCount} today - +${transactionStats.weekCount} this week`,
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6 p-10 pb-16 md:block">
      <div className="flex flex-col gap-5 w-full">
        <div className="text-3xl font-bold text-yellow">Dashboard</div>

        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              discription={d.discription}
              icon={d.icon}
              label={d.label}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
