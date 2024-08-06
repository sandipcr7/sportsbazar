import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    mode: "jit",
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'secondary': '',
                'light': '#2A2D3E',
                'theme-blue': '#5C42E7',
                'primary': '#4F46E5',
                'theme-green': '#01C91D',
                'theme-panel': 'rgb(24 39 63)',
                'light-gray': '#999ba6',
                'theme-red': '#FF0000',
                'theme-dark-blue': "#14141F",
                'dark': "#212428",
                // 'light-gray': '#999ba6',
                // 'yellow': '#FFFF00',
                // 'gold': '#facc15',
                // 'front-gray': '#343444',
                // 'theme-black': '#212428',
                // 'theme-red': '#FF0000',
                // 'theme-purple': '#EFF2F5',
                // 'extra-light-gray': '#999ba6',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'poppins': "Poppins,sans-serif"
            },
            container: {
                center: true,
                padding: '2rem'
            },
        },
    },

    plugins: [forms, typography,   require('flowbite/plugin')],
};
