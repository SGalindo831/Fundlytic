"use client";
import { useRouter } from "next/navigation";

export default function GroupPage() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Groups Page</h1>
      <p className="text-gray-700">Welcome to the Groups dashboard!</p>
      
      <button onClick={goHome}
      className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
      home</button>
    </div>
  );
}