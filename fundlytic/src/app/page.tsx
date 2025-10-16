"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();

  const goToGroup = () => {
    router.push("/group"); 
  };

    const goToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-3xl font-bold">Fundlytic</h1>
        <p className="text-sm">Your concession app dashboard</p>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        {/* Product Menu Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Product Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Product Cards */}
            <div className="bg-white p-4 rounded shadow">
              <button
                onClick={goToGroup}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Groups
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <button
                onClick={goToRegister}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow">Product 3</div>
          </div>
        </section>

        {/* Sales Dashboard Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sales Dashboard</h2>
          <div className="bg-white p-6 rounded shadow">
            <p>Sales data will go here...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
