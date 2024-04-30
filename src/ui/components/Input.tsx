"use client";
import React, { useState } from 'react';
import clsx from 'clsx';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    required?: boolean;
    className?: string;
    options?: string[]; // Options for select input
}

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, required = false, className, options }) => {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange(e);
        // Perform validation based on input type
        switch (type) {
            case 'email':
                if (required && !e.target.value.trim()) {
                    setError('Email is required');
                } else if (
                    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
                ) {
                    setError('Invalid email address');
                } else {
                    setError(null);
                }
                break;
            case 'password':
                if (required && !e.target.value.trim()) {
                    setError('Password is required');
                } else {
                    setError(null);
                }
                break;
            case 'select':
                if (required && !e.target.value.trim()) {
                    setError('Please select an option');
                } else {
                    setError(null);
                }
                break;
            default:
                setError(null);
                break;
        }
    };

    return (
        <div className="relative">
            {type === 'select' ? (
                <select
                    value={value}
                    onChange={handleChange}
                    className={clsx(
                        'w-full px-4 py-2 rounded-lg transition-colors duration-300 border',
                        {
                            'border-red-500': error,
                        },
                        className
                    )}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={clsx(
                        'w-full px-4 py-2 rounded-lg transition-colors duration-300 border',
                        {
                            'border-red-500': error,
                        },
                        className
                    )}
                />
            )}
            {error && (
                <span className="absolute bottom-0 left-0 text-red-500 text-sm">{error}</span>
            )}
        </div>
    );
};
