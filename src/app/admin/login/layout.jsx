import ProtectedAdminAuth from "@/middleware/ProtectedAdminAuth";

export default function AdminAuthLayout({ children }) {
  return (
    <div className="min-h-screen">
      <ProtectedAdminAuth>{children}</ProtectedAdminAuth>
    </div>
  );
}
