"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";

export default function OrderHistoryPage() {
  const { user, isLoaded } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for Clerk to fully load
    if (!isLoaded) return;

    // If not signed in, skip fetch
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "order" && userId == $userId] | order(_createdAt desc) {
            _id,
            totalPrice,
            deliveryDate,
            createdAt,
            products[] {
              name,
              quantity,
              price,
              image
            }
          }`,
          { userId: user.id }
        );
        setOrders(data);
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, isLoaded]);

  return (
    <div className="w-full min-h-screen px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Your Order History</h1>

      {loading ? (
        <p className="text-gray-600">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-lg mb-6 p-6 shadow-sm"
          >
            <div className="mb-4">
              <p className="text-lg font-semibold">Order #{index + 1}</p>
              <p className="text-sm text-gray-600">
                Placed on:{" "}
                {new Date(
                  order.createdAt || order._createdAt
                ).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                Estimated Delivery:{" "}
                {new Date(order.deliveryDate).toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-4">
              {order.products.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-cuspinky flex items-center justify-center text-sm text-white rounded">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      "IMG"
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-md font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t pt-4 text-right font-semibold">
              Total: Rs. {order.totalPrice.toLocaleString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
