import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // 모달 내용
    title?: string; // 모달 제목 (옵션)
    className?: string; // 커스텀 스타일을 위한 클래스 (옵션)
}

export default function Modal ({isOpen, onClose, children, title, className} : ModalProps)
{
    if (!isOpen) return null;
    return (
    <div>
        <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative ${className || ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✖
        </button>

        {/* 제목 */}
        {title && (
          <h2 id="modal-title" className="text-lg font-semibold text-gray-800 mb-4">
            {title}
          </h2>
        )}

        {/* 내용 */}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>)
}