"use client";
import { Item } from "@/types/item";
import ShoppingItem from "./ShoppingItem";
import { useState } from "react";

const shoppingItems: Item.ShoppingItemProps[] = [
    {
      name: "T-Shirt",
      price: 19.99,
      category: "Clothing",
    },
    {
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
    },
    {
      name: "Coffee Mug",
      price: 9.99,
      category: "Home",
    },
    {
      name: "Headphones",
      price: 199.99,
      category: "Electronics",
    },
    {
      name: "Sneakers",
      price: 59.99,
      category: "Clothing",
    },
    {
      name: "Backpack",
      price: 49.99,
      category: "Accessories",
    },
    {
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
    },
    {
      name: "Cookware Set",
      price: 129.99,
      category: "Home",
    },
    {
      name: "Gaming Chair",
      price: 349.99,
      category: "Furniture",
    },
    {
      name: "Bluetooth Speaker",
      price: 49.99,
      category: "Electronics",
    },
  ];

export default function ShoppingItemContainer () {

    const [filter, setFilter] = useState<string>("ALL");
    const filteredItems = shoppingItems.filter((item) =>
        filter === "All" ? true : item.category === filter
      );

      return (
        <div className="p-6">
          {/* 필터 옵션 */}
          <div className="mb-6">
            <label htmlFor="filter" className="mr-2 font-semibold">
              Filter by Category:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="All">All</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Home">Home</option>
            </select>
          </div>
    
          {/* 쇼핑 아이템 리스트 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <ShoppingItem
                key={index}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            ))}
          </div>
        </div>
      );
    }