"use client";
import { Item } from "@/types/item";
import ShoppingItem from "./ShoppingItem";
import { useState } from "react";

const shoppingItems: Item.ShoppingItemProps[] = [
    {
        id: "item-1",
        name: "T-Shirt",
        price: 19.99,
        category: "Clothing",
        remainingStock: 92,
    },
    {
        id: "item-2",
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        remainingStock: 76,
    },
    {
        id: "item-3",
        name: "Coffee Mug",
        price: 9.99,
        category: "Home",
        remainingStock: 74,
    },
    {
        id: "item-4",
        name: "Headphones",
        price: 199.99,
        category: "Electronics",
        remainingStock: 16,
    },
    {
        id: "item-5",
        name: "Sneakers",
        price: 59.99,
        category: "Clothing",
        remainingStock: 36,
    },
    {
        id: "item-6",
        name: "Backpack",
        price: 49.99,
        category: "Accessories",
        remainingStock: 52,
    },
    {
        id: "item-7",
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        remainingStock: 4,
    },
    {
        id: "item-8",
        name: "Cookware Set",
        price: 129.99,
        category: "Home",
        remainingStock: 57,
    },
    {
        id: "item-9",
        name: "Gaming Chair",
        price: 349.99,
        category: "Furniture",
        remainingStock: 22,
    },
    {
        id: "item-10",
        name: "Bluetooth Speaker",
        price: 49.99,
        category: "Electronics",
        remainingStock: 32,
    },
  ];

export default function ShoppingItemContainer () {

    const [filter, setFilter] = useState<string>("All");
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
                id = {item.id}
                remainingStock={item.remainingStock}
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