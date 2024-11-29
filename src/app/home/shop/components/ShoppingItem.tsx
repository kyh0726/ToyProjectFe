import { Item } from "@/types/item"

export default function ShoppingItem ({name, category, price}: Item.ShoppingItemProps) {


    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-blue-500 font-bold">${price.toFixed(2)}</p>
      </div>
    )
}