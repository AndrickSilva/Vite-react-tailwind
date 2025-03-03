# Vite + React + Tailwind CSS + pnpm Starter Template

This is a starter template using the latest versions of **React**, **Vite**, **Tailwind CSS**, and **pnpm**.

## 🚀 Features

- **Vite** – Fast and optimized development experience.
- **React 19** – Latest version of React for building modern UIs.
- **Tailwind CSS 4** – Utility-first CSS framework for styling.
- **pnpm** – Efficient and fast package manager.

## 📦 Installation

Make sure you have **pnpm** installed. If not, install it globally:
```sh
npm install -g pnpm
```

Then, clone this repository and install dependencies:
```sh
git clone <repo-url>
cd vite-react-tailwind
pnpm install
```

## 🛠️ Development

To start the development server, run:
```sh
pnpm run dev
```
This will start Vite's development server.

## 📦 Build for Production

To build the project, use:
```sh
pnpm run build
```
The output will be in the `dist` folder.

## 🔍 Preview Production Build

To preview the built project:
```sh
pnpm run preview
```

## 📂 Project Structure
```
├── src/                # Source files
│   ├── components/     # React components
│   ├── assets/         # Static assets
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry file
├── public/             # Public assets
├── index.html          # Main HTML file
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # pnpm lock file
└── README.md           # Project documentation
```

## 🛠 Configuration

### Tailwind CSS
Tailwind is configured in `tailwind.config.js`. Modify it as needed to customize styles.

### Environment Variables
If needed, create a `.env` file and define environment variables like:
```
VITE_API_URL=https://api.example.com
```
Access them in code using:
```ts
import.meta.env.VITE_API_URL
```

## 🤝 Contributing
Feel free to fork this project and submit pull requests!

## 📜 License
This project is licensed under the **MIT License**.

