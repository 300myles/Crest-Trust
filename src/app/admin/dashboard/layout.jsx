import { Sidebar } from '@/components/AdminSideBar'
import ProtectedAdminRoute from '@/middleware/ProtectedAdminRoute'
import React from 'react'
import AdminNav from '../../../components/AdminNav'

const AdminLayout = ({children}) => {
  return (
    <ProtectedAdminRoute>
    <div className="h-full relative w-[screen]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 ">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <AdminNav />
        {children}
      </main>
    </div>
  </ProtectedAdminRoute>
  )
}

export default AdminLayout