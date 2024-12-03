/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'batman-bg': "url('https://s3-alpha-sig.figma.com/img/2a07/851f/4ee1d287a6780f57aaa3a225902fdc4d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kU46dEnsdKEmFEk5B7cAMgzmDI5qFSvtOqOU7SnjeJCLajHb5QHJi4vOkPw5nOzEWjNa2o4qZXsOBVJtQUvHHCUodzpQSLCJedwOvMIPbn6P-MoqAL6cWduO4wKDN1OnMC4zBLBYBa1JLUOVigANCMP4P5FU1DEzqrYoiVQydR2YX~nui0Gua9aJCEWcAYxBVs50KciEmvTe92KYO67Wk8pOk5t~Dx2tjc7fG4Gl-e8g6gZnuSBwi8HCcqU0l2GQtBhMwAk~1k6s7e8YxrTMyFAzcYtIH7Y0hyF1wxs8msc1qpdQ4vX7vMVwVUKf1OqcR5IzfqFcZfU6wLU8Lq-r5Q__')",
      },
      colors: {
        pinkCustom: '#FF267A',
        orangeCustom: '#FFA634',
      },
    },
  },
  plugins: [],
}

