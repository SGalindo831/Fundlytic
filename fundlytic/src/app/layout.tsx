import Link from "next/link";
import "./global.css";

export default function RootLayout({ children } : { children: React.ReactNode }) {

  return(
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex">
        {/*SideBar*/}
        <nav className="w-64 bg-blue-700 text-white p-4 space-y-3">
          <h1 className="text-2xl font-bold mb-4">Fundlytic</h1>
          <Link href="/" className="block hover:bg-blue-600 p-2 rounded">Dashboard</Link>
          <Link href="/group" className="block hover:bg-blue-600 p-2 rounded">Groups</Link>
          <Link href="/register" className="block hover:bg-blue-600 p-2 rounded">Register</Link>
        </nav>

         <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
