import coreConfig from "tailwind/modified.tailwind.config"

var require = createRequire(import.meta.url);
var module = { exports: {} };

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...coreConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
