# Laravel + Inertia + React + TypeScript Starter

A ready-to-use boilerplate for building modern web applications using **Laravel**, **Inertia.js**, **React**, and **TypeScript**.

This starter comes pre-configured with:

- ✅ Inertia.js for SPA-like experience
- ⚛️ React with TypeScript for scalable frontend
- 🌐 i18n translation support using `react-i18next`
- 🌙 Dark mode toggle (persisted theme)
- 🧱 Clean folder structure and code organization

## Features

- Laravel backend with Inertia for seamless routing
- React + TypeScript frontend
- Multi-language support (`react-i18next`)
- Persistent dark/light theme toggle
- Vite for blazing fast development
- Tailwind CSS for modern UI styling
- Environment-based configurations

## Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install JS dependencies:

```bash
npm install
```

4. Set up environment:

```bash
cp .env.example .env
php artisan key:generate
```

5. Run migrations (optional):

```bash
php artisan migrate
```

6. Start development servers:

```bash
npm run dev
php artisan serve
```

## Usage

- Language files are located in `resources/lang`
- Dark mode toggle is handled in `use-appearance.ts` (you can modify to use `localStorage` or `system preference`)
- Add more pages in `resources/js/Pages` and register them in Laravel routes

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Compile for production
npm run lint      # Lint TypeScript/JS code (optional)
```

## Folder Structure

```
resources/
├── js/
│   ├── Pages/
│   ├── Components/
│   ├── hooks/
│   ├── lib/ 
│   ├── App.tsx
│   └── main.tsx
├── views/
│   └── app.blade.php
```

## Contributing

Feel free to fork this project and enhance it! PRs are welcome.

## License

[MIT](LICENSE)
