/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light": "rgba(239, 239, 251, 0.40)",
        "custom-dark": "rgba(217, 215, 249, 0.40)",
        body: "#041527",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(239, 239, 251, 0.40) 0%, rgba(217, 215, 249, 0.40) 100%)",
      },
      maxWidth: {
        container: "1348px",
      },
    },
  },
  plugins: [],
};
