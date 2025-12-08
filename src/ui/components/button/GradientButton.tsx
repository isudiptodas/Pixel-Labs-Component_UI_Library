'use client'

import { useState, useEffect } from "react";

function GradientButton({ theme = 'default' }: { theme?: string }) {

    const backgroundTheme = [
        {theme: 'red', class: `bg-linear-to-r from-red-400 to-red-600`, text: `text-white`},
        {theme: 'green', class: `bg-linear-to-r from-teal-500 to-teal-700`, text: `text-white`},
        {theme: 'yellow', class: `bg-linear-to-r from-yellow-400 to-yellow-500`, text: `text-black`},
        {theme: 'blue', class: `bg-linear-to-r from-blue-400 to-blue-600`, text: `text-white`},
        {theme: 'default', class: `bg-linear-to-r from-white via-gray-300 to-gray-400`, text: `text-black`},
    ];

    const [currentTheme, setCurrentTheme] = useState<string>('');
    const [currentText, setCurrentText] = useState<string>('');

    useEffect(() => {
        const found = backgroundTheme.find((bg) => bg.theme === theme);
        setCurrentText(found?.text as string);
        setCurrentTheme(found?.class as string);
    }, [theme]);

    return (
        <>
            <p className={`w-auto capitalize px-6 py-2 rounded-full text-center ${currentTheme} ${currentText} cursor-pointer text-sm shadow-lg`}>{theme} Button</p>
        </>
    )
}

export default GradientButton
