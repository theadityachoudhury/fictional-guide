//Theme switcher component with moon and sun icons without using next-themes
"use client"
import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
        setTheme(localStorage.getItem('theme') || 'light');
    }, []);

    if (!mounted) return null;


    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={clsx(
                'rounded-lg px-2 py-1',
                'flex items-center gap-2',
                'bg-gray-200 dark:bg-gray-800',
                'text-gray-800 dark:text-gray-200',
                'hover:bg-gray-300 dark:hover:bg-gray-700',
                'focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600',
                'transition duration-300 ease-in-out'
            )}
            onClick={() => setTheme(
                theme === 'dark' ? 'light' : 'dark'
            )}
        >
            {theme === 'dark' ?
                <div className='flex gap-1'>
                    <HiSun size={24} className='w-7 h-7' />
                    <p className='text-md'>Light</p>
                </div> :
                <div className='flex gap-1'>
                    <HiMoon size={24} className='w-7 h-7' />
                    <p className='text-md'>Dark</p>
                </div>}
        </button>
    );
}