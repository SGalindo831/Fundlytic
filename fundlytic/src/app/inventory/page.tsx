"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { supabase } from "@/lib/supabase";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: ""});

  //Fetch the products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (!error && data)
      {
        setProducts(data as Product[]);
      }
    }
    fetchProducts();
   }, []);

   //Adding a new product
   async function addProduct(e: React.FormEvent) {
    e.preventDefault();
    const { name, price } = newProduct;
    if (!name || !price)
    {
      return;
    }
    const { error } = await supabase.from("products").insert({ name, price: Number(price) });
    if (!error)
    {
      setShowModal(false);
      setNewProduct({ name: "", price: "" });
      //Refresh the product list
      const { data } = await supabase.from("products").select("*");
      if (data)
      {
        setProducts(data as Product[]);
      }
    }
}

return(
  <div>
    <h1 className="text=2x1 font-bold mb-4">Inventory</h1>
    <button
      onClick={() => setShowModal(true)}
      className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
    >
      Add Item
    </button>
    {/* Inventory List */}
    <ul className="mb-6">
      {products.map(product => (
        <li key={product.id} className="bg-white shadow p-3 mb-2 rounded flex justify-between items-center">
          <span>{product.name}</span>
          <span className="text-gray-600">${product.price}</span>
        </li>
      ))}
    </ul>
    {/* Modal popup for adding items */}
    {showModal && (
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded shadow-lg min-w-[300px]">
          <h2 className="text-xl font-bold mb-4">Add Item</h2>
          <form onSubmit={addProduct} className="space-y-3">
            <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full"
            required
            />
            <input
            type="number"
            min="0"
            step="any"
            placeholder="Price"
            value={newProduct.price}
            onChange={e => setNewProduct({ ...newProduct, price: e.target.value})}
            className="border border-gray-300 rounded px-2 py-1 w-full"
            required
            />
            <div className="flex gap-3 mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
              <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )}

    <Link
    href="/"
    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Go Home
    </Link>
  </div>
 );
}


// export default function InventoryPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-4">Inventory Page</h1>
//       <p className="text-gray-700">Welcome to Inventory!</p>

//       <Link
//       href="/"
//       className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Go Home
//       </Link>
//     </div>
//   );
// }