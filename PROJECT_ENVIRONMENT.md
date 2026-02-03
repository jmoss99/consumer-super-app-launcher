# Consumer Super App Launcher - Project & Environment Documentation

## 📋 Project Overview

The **Consumer Super App Launcher** is a React-based web application that implements a consumer-facing super app launcher interface. The project is built from a Figma design and provides a modern, responsive user interface for navigating between different app sections and features.

## 🛠️ Tech Stack

### Core Technologies
- **React** `^18.2.0` - UI library
- **React DOM** `^18.2.0` - React rendering
- **React Router DOM** `^6.21.0` - Client-side routing

### Build Tools & Development
- **Vite** `^5.0.8` - Build tool and dev server
- **@vitejs/plugin-react** `^4.2.1` - React plugin for Vite

### Styling
- **Tailwind CSS** `^3.4.0` - Utility-first CSS framework
- **PostCSS** `^8.4.32` - CSS processing
- **Autoprefixer** `^10.4.16` - CSS vendor prefixing

### Type Definitions
- **@types/react** `^18.2.43`
- **@types/react-dom** `^18.2.17`

## 📦 Environment Requirements

### Prerequisites
- **Node.js** - Version 14.x or higher (recommended: 16.x or 18.x)
- **npm** - Comes with Node.js (or use yarn/pnpm as alternative)
- **Git** - For version control

### System Requirements
- macOS, Linux, or Windows
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Minimum 4GB RAM recommended
- Internet connection for initial package installation

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd consumer-super-app-launcher
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Start Development Server
```bash
npm run dev
```

The development server will start and typically be available at:
- **Local:** `http://localhost:5173`
- The server supports hot module replacement (HMR) for instant updates

### 4. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

Preview the production build locally before deployment.

## 📁 Project Structure

```
consumer-super-app-launcher/
├── index.html                 # HTML entry point
├── package.json              # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── README.md                # Basic project documentation
├── src/
│   ├── main.jsx             # React application entry point
│   ├── App.jsx              # Main app component with routing logic
│   ├── index.css            # Global styles and Tailwind imports
│   └── components/          # React components
│       ├── CardImages.jsx
│       ├── ChallengesScreen.jsx
│       ├── ConsumerCards.jsx
│       ├── Crm.jsx
│       ├── DeviceConnectionStatus.jsx
│       ├── HomeScreenSizeLarge.jsx
│       ├── LauncherHeader.jsx
│       ├── Mouse.jsx
│       └── PlayerCard.jsx
└── node_modules/            # Dependencies (git-ignored)
```

## 🎨 Styling Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom font families:
- **Acumin Pro ExtraCondensed** - Custom font family
- **Barlow** - Custom font family

Configuration is located in `tailwind.config.js`.

### PostCSS
PostCSS is configured to process Tailwind CSS and apply autoprefixer for browser compatibility.

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Starts Vite dev server with HMR |
| **Build** | `npm run build` | Creates optimized production build |
| **Preview** | `npm run preview` | Preview production build locally |

## 🎯 Application Features

### Screen Navigation
The app implements a simple screen-based navigation system:
- **Home Screen** - Main launcher interface (`HomeScreenSizeLarge`)
- **Challenges Screen** - Challenges interface (`ChallengesScreen`)

Navigation is handled via state management in `App.jsx`.

### Key Components
- `HomeScreenSizeLarge` - Main home screen layout
- `ChallengesScreen` - Challenges view with back navigation
- `LauncherHeader` - Header component
- `ConsumerCards` - Card components for consumer features
- `PlayerCard` - Player information card
- `DeviceConnectionStatus` - Device connection indicator
- `CardImages` - Image assets for cards
- `Crm` - CRM-related component
- `Mouse` - Mouse interaction component

## 🔗 Design Reference

This project implements the **Consumer Super App Launcher** design from Figma:
- **Figma Node ID:** `17004:98856`
- The design serves as the visual reference for component implementation

## 📝 Development Notes

### Code Style
- Uses ES6+ JavaScript features
- React functional components with hooks
- JSX syntax for component markup
- Tailwind utility classes for styling

### Module System
- Project uses ES modules (`"type": "module"` in package.json)
- Import/export syntax throughout

### Browser Support
- Modern browsers with ES6+ support
- Autoprefixer ensures CSS compatibility

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual port number.

### Dependencies Issues
If you encounter dependency issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure all dependencies are installed and Node.js version is compatible:
```bash
node --version  # Should be 14.x or higher
npm --version
```

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## 👥 Team Collaboration

### Before Starting Work
1. Pull latest changes: `git pull`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`

### Before Committing
1. Test the application: `npm run dev`
2. Build to check for errors: `npm run build`
3. Ensure code follows project conventions

---

**Project Version:** 1.0.0
