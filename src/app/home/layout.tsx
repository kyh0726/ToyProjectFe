// app/dashboard/layout.tsx
import Link from 'next/link';
import React from 'react';
import { Banner } from '@/shared';
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            
            <aside className="w-64 bg-gray-800 text-white p-4 z-10 h-screen">
                <h1 className="text-xl font-bold mb-4">ShoppingMall</h1>

                <nav>
                    <ul className='z-1'>
                        <li className="mb-2"><Link href="/home">홈</Link></li>
                        <li className="mb-2"><Link href="/home/shop">shop 페이지</Link></li>
                        <li className="mb-2"><Link href="/home/recharge">충전 페이지</Link></li>
                        <li className="mb-2"><Link href="/home/payment">결제 페이지</Link></li>
                        <li className="mb-2"><Link href="/home/cart">카트 페이지</Link></li>
                        <li className= "fixed bottom-4 left-4"><Link href="/home/customer-service">고객 센터</Link></li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}       
            <div className='w-full h-screen bg-gray-100'>
            <Banner message="📢 Don't miss out on our latest updates!" />

            <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
