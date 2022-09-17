/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html',
    ],
    theme: {
        fontFamily: {
            sans: ['Iner', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                galaxy: "url('./background-galaxy.png')",
                'nlw-gradient': 'linear-gradient(89.86deg, #9572fc 1.08%, #43e7ad 63.94%, #e1d55d 85.57%)',
                'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.88%)',
            },
        },
    },
    plugins: [],
}