import Link from "next/link";

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Inventory Page</h1>
      <p className="text-gray-700">Welcome to Inventory!</p>

      <Link
      href="/"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}