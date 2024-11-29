"use client";
import React, { useEffect, useState } from "react";

type BannerProps = {
    message: string;
}

const messages = [
    "🎉 이벤트 소식 1!",
    "💡 이벤트 소식 2!",
    "🚀 이벤트 소식 3!",
  ];

export default function PersistentBanner({ message }: BannerProps) {
    

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-500 text-white text-center py-3 h-10 w-full">
      <span>{messages[currentIndex]}</span>
    </div>
  );
}
