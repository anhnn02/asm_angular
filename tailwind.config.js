module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-ann": "var(--primary)",
        "secondary-ann": "var(--secondary)",
        "primary-light-ann": "var(--primary-light)",
        "thirty-ann": "var(--thirty)",
        "bgr-ann": "var(--bgr)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-15-color": "var(--primary-15-color)",
        "primary-50-color": "var(--primary-50-color)",
        "gray-primary": "var(--gray)",
        "gray-light": "var(--gray-light)",
        "gray-lighter": "var(--gray-lighter)",
        "gray-dark": "var(--gray-dark)",
        "gray-darker": "var(--gray-darker)",
        "bgr-color": "var(--bgr-color)",
        "sale-color": "var(--sale-color)",
        "new-item-color": "var(--new-item-color)",
        "star-color": "var(--star-color)",
      },
    },
  },
  prefix: 'tw-',
  plugins: [require("daisyui")],
}