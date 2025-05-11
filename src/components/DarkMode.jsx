import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div 
                className="cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={toggleTheme}
            >
                {theme === "dark" ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                    <Moon className="w-6 h-6 text-blue-700" />
                )}
            </div>
        </div>
    );
};

export default DarkMode;