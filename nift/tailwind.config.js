module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway"],
                kosugimaru: ["Kosugi Maru"],
                azeretmono: ["Azeret Mono"],
            },
        },
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
