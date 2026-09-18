# Sardar Vallabh Bhai Patel Dairy Website

A responsive React + Vite static website for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload this project.
3. Run `npm install` and `npm run build` locally, or use the included GitHub Actions workflow.
4. In GitHub: **Settings → Pages → Source → GitHub Actions**.
5. Push to `main`. The workflow deploys `dist/`.

## Replace images

Put the real dairy photographs in:

`src/assets/images/`

with these names:

- `khoya.jpg`
- `paneer.jpg`
- `curd.jpg`
- `milk.jpg`
- `frozen-peas.jpg`

The product cards already point to those files. If an image is missing, the site uses a temporary fallback image.

For the owner section, replace the placeholder only with an actual photograph of Dinesh Singh when one is available.

## Business details

Edit `src/data/business.js` to change the business name, owner, phone, WhatsApp number, Maps link, or products.
