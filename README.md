# YouTube Full Browser Mode - Landing Page

This is the landing page for the YouTube Full Browser Mode browser extension. It's built with Next.js and Shadcn UI to showcase the extension's features in a modern, responsive design.

![YouTube Full Browser Mode](public/assets/video.gif)

## About the Extension

YouTube Full Browser Mode is a browser extension that provides a true full browser experience on YouTube, with advanced customization for the video player and controls. The extension allows users to:

- Expand the YouTube video player to fill the entire browser window
- Hide distracting elements for a clean viewing experience
- Enjoy full-width video controls with optimized positioning
- Use smart control visibility based on mouse position

## Technology Stack

The landing page is built with:

- **Next.js** - React framework for server-rendered applications
- **Shadcn UI** - High-quality UI components built with Radix UI and Tailwind CSS
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Static type checking for JavaScript

## Features of the Landing Page

- 📱 Fully responsive design that works on all devices
- 🎨 Modern UI with custom animations and visual elements
- 🧩 Component-based architecture for maintainability
- 🚀 Optimized for performance and SEO
- 🌙 Light and dark mode support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/murathanje/YT_Full_Browser_Extension.git
   cd YT_Full_Browser_Extension
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/
│   └── assets/        # Images and other static assets
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   │   ├── ui/        # Shadcn UI components
│   │   └── ...        # Custom components
│   └── lib/           # Utility functions and helpers
└── ...                # Configuration files
```

## Deployment

The site can be deployed to any static hosting service or serverless platform that supports Next.js, such as Vercel, Netlify, or GitHub Pages.

```bash
npm run build
# or
yarn build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/) license.

## Links

- [Extension GitHub Repository](https://github.com/murathanje/YT_Full_Browser_Extension)
- [Extension Download](https://github.com/murathanje/YT_Full_Browser_Extension/releases)
