"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center justify-center rounded-lg text-sm">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-md shadow font-medium focus:outline-none focus:ring-2 ${
          theme === 'dark' 
            ? 'bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-300 dark:focus:ring-gray-700' 
            : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-700'
        }`}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <div className="flex items-center justify-center space-x-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
//       <span className="font-medium text-gray-700 dark:text-gray-300">
//         The current theme is: {theme}
//       </span>
//       <button
//         onClick={toggleTheme}
//         className={`px-4 py-2 rounded-md shadow font-medium focus:outline-none focus:ring-2 ${
//           theme === 'dark' 
//             ? 'bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-300 dark:focus:ring-gray-700' 
//             : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-700'
//         }`}
//       >
//         {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </div>
//   );
// }