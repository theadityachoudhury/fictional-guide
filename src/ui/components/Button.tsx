// Path: src/ui/components/Button.tsx
import React from "react";
import clsx from "clsx";

export type ButtonProps = Readonly<{
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "login"
    | "link";
    size?: "small" | "medium" | "large";
    block?: boolean;
    disabled?: boolean;
    className?: string;
}>;

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "medium",
    block = false,
    disabled = false,
    className
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={clsx(
                "px-4 py-2 rounded-lg transition-colors duration-300",
                {
                    "bg-blue-500 text-white hover:bg-blue-700": variant === "primary",
                    "bg-blue-500 text-white hover:bg-indigo-700 px-2 py-1": variant === "login",
                    "bg-gray-500 text-white hover:bg-gray-700": variant === "secondary",
                    "bg-red-500 text-white hover:bg-red-700": variant === "danger",
                    "bg-green-500 text-white hover:bg-green-700": variant === "success",
                    "bg-yellow-500 text-white hover:bg-yellow-700": variant === "warning",
                    "bg-blue-300 text-white hover:bg-blue-500": variant === "info",
                    "bg-gray-200 text-black hover:bg-gray-500": variant === "light",
                    "bg-black text-white hover:bg-white hover:text-black": variant === "dark",
                    "text-blue-500": variant === "link",
                    "w-full": block,
                    "opacity-50 cursor-not-allowed": disabled,
                    "text-sm": size === "small",
                    "text-lg": size === "large",
                },
                "text-md",
                // Automatically match dark mode or light mode
                {
                    "@media (prefers-color-scheme: dark)": {
                        "bg-gray-800 text-white hover:bg-gray-700": variant === "dark",
                    },
                    "@media (prefers-color-scheme: light)": {
                        "bg-gray-200 text-black hover:bg-gray-500": variant === "light",
                    },
                }, className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
