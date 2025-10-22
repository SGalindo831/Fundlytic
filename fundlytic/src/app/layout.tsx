"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, UsersRound, CreditCard, Grid } from "lucide-react";
import "./globals.css";

export default function RootLayout({ 
  children 
} : {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return(
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <div className="flex min-h-screen">
          {/*SideBar*/}
          <aside
            className={`bg-blue-700 text-white transition-all duration-300 ${
              isCollapsed ? "w-16" : "w-64"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-blue-500">
              {!isCollapsed && (
                <h1 className="text-xl font-bold whitespace-nowrap">Fundlytic</h1>
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-white hover:text-blue-200"
              >
                {isCollapsed ? <Menu size={24} /> : <X size={24} />}
              </button>
            </div>

            <nav className="mt-4 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 transition"
              >
                <Home size={20} />
                {!isCollapsed && <span>Home</span>}
              </Link>
              <Link
                href="/group"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 transition"
              >
                <UsersRound size={20} />
                {!isCollapsed && <span>Groups</span>}
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 transition"
              >
                <CreditCard size={20} />
                {!isCollapsed && <span>Register</span>}
              </Link>
              <Link
                href="/inventory"
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 transition"
              >
                <Grid size={20} />
                {!isCollapsed && <span>Inventory</span>}
              </Link>
            </nav>
          </aside>

          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  )
}