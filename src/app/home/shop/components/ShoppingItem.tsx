import { Item } from "@/types/item"
import Link from "next/link"

export default function ShoppingItem ({id, name, category, price, remainingStock}: Item.ShoppingItemProps) {


    return (
        <Link className="border rounded p-4 shadow hover:shadow-lg transition" href={`/home/shop/${id}`}>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-blue-500 font-bold">${price.toFixed(2)}</p>
        <p className="text-gray-600 font-bold">재고 : {remainingStock}개</p>
      </Link>
    )
}