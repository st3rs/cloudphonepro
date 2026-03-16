<div align="center">
  <h1>📱 Cloud Emulator Hub</h1>
  <p>A modern, responsive web application for comparing and reviewing cloud phone emulators.</p>

  <p>
    <img src="https://img.shields.io/badge/React-19-blue.svg?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-blue.svg?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC.svg?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-6.2-646CFF.svg?style=for-the-badge&logo=vite" alt="Vite" />
  </p>
</div>

## ✨ Features

- **🌍 Bilingual Support (i18n):** Seamlessly switch between English and Thai languages.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **🚀 Smooth Animations:** Powered by Framer Motion for a premium user experience.
- **🔗 Affiliate Integration:** Built-in support for affiliate links with interactive toast notifications.
- **⚡ Lightning Fast:** Built with Vite and React 19 for optimal performance.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cloud-emulator-hub.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cloud-emulator-hub
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Header, Footer, ProductCard)
├── data/           # Static data and product information (Affiliate links)
├── pages/          # Route components (Home, ProductPage)
├── i18n/           # Internationalization setup and translations
├── App.tsx         # Main application component and routing
└── main.tsx        # Application entry point
```

## 📝 Customization

To update the affiliate links or add new products, edit the `src/data/products.ts` file.

```typescript
// Example product entry
{
  id: "vmos",
  name: "VMOS Cloud",
  logo: "...",
  price: 5.99,
  affiliateLink: "https://www.vmoscloud.com/invite/vmosagfyu3rs", // Update your link here
  // ...
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
