const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./index.html",
        "./src/components/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme:{
        screens:{
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        fontFamily:{
            'sans': ['ui-sans-serif','system-ui'],
            'serif': ['ui-serif', 'Georgia'],
        },
        extend:{
            spacing:{
                '128': '32rem',
                '144':'36rem',
            },
            borderRadius:{
                '4xl': '2rem',
            }
        }
    },
    plugins: []
}