"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flowbite = require("flowbite-react/tailwind");
var config = {
    content: [
        flowbite.content(),
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                blackr: '#09090B',
                whiter: '#FFF6F3',
                primary: '#34375A',
                secundary: '#906F8D',
                sechv: '#564254',
                container: '#0F101C',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
};
exports.default = config;