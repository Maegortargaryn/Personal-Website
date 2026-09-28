# 🥛 Sardar Vallabh Bhai Patel Dairy

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge)

A modern, fast, and highly responsive single-page web application for **Sardar Vallabh Bhai Patel Dairy**—a local dairy business owned by Dinesh Singh in Baraula, Kaushambi (UP).

Built with React and Vite, this platform serves as an elegant digital storefront for local customers to discover fresh dairy products, learn about the business, and place orders effortlessly via WhatsApp.

---

## ✨ Features

- 📱 **WhatsApp Integration:** Customers can place direct orders and make bulk inquiries seamlessly via pre-filled WhatsApp messages.
- 🎨 **Modern UI/UX:** Clean, professional aesthetic featuring a blue accent theme, elegant typography (Outfit & Playfair Display), and sleek "liquid glassmorphism" translucent buttons.
- 🌓 **Dark & Light Mode:** Built-in seamless toggling between a crisp light mode and a deep, immersive dark mode. Theme preferences are remembered locally.
- 🌍 **Bilingual Support (English & Hindi):** Instantly switch between English and Hindi translations for the entire website to serve a wider local audience.
- ⚡ **Lightning Fast:** Built with Vite for rapid local development and optimized static production builds.

## 📦 Products Offered

The dairy provides fresh and pure products for households, sweet shops, catering, and events:
- **Pure Desi Ghee**
- **Fresh Khoya & Paneer**
- **Curd & Milk**
- **Frozen Peas**

---

## 🚀 Quick Start (Local Development)

To run this project locally on your machine, you need [Node.js](https://nodejs.org/) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Maegortargaryn/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   > **Note for Windows Users:** If your PowerShell execution policy blocks running scripts, you can run the server via `cmd /c npm run dev`.

---

## 🛠️ Customization & Data

All essential business information and inventory can be easily edited without digging through React components! 

Simply open `src/data/business.js` to update:
- Owner Name & Contact Numbers (Phone / WhatsApp)
- Store Location & Google Maps Link
- Product Inventory (Names, Descriptions, Images)

### Updating Images
Store any high-quality photos in the `src/assets/images/` directory and import them into `src/data/business.js`.

---

## 🚀 Deployment

This repository is configured to easily deploy as a static site.

1. Run the build command:
   ```bash
   npm run build
   ```
2. The production-ready optimized files will be generated in the `dist/` directory.
3. You can easily deploy this `dist/` directory directly to GitHub Pages, Vercel, Netlify, or any static host.

---

*Made with care for local businesses.*
