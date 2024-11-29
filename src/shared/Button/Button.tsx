"use client";
import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
};

const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
};

const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    disabled = false
}) => {
    const classes = `inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium 
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${
        disabled
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : variantClasses[variant]
    }`;

return (
    <button className={classes} onClick={onClick} disabled={disabled}>
        {label}
    </button>
);
}


export default Button;