Docusaurus i18n + Tailwind
==========================

## Docusaurus + Tailwind

Following the instruction from [https://dev.to/sajclarke_62/using-tailwindcss-v3-in-docusaurus-in-5-steps-5c26](Using TailwindCSS v3 in Docusaurus in 5 steps blog)

## Steps:

### 1. Install libraries and configure tailwind

```
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init
```

Modify `tailwind.config.js` 

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./i18n/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

### 2. Modify docusaurus.config.js

```javascript
plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

```

### 3. Load tailwind

Modify `src/css/custom.css` by including the following at the top of the file:


```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Run
```sh
yarn clear
yarn start
```
