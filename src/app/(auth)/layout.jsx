import ProtectedAuthRoute from "@/middleware/ProtectedAuthRoute";


export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen">
      <ProtectedAuthRoute>{children}</ProtectedAuthRoute>
    </div>
  );
}
