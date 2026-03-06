# ABB Mobile Apps Privacy Policy Site

A centralized React application for hosting and displaying privacy policies, terms of service, and code of conduct documents for ABB's mobile application portfolio.

## 🌐 Live Site

**Production URL:** [https://abb-public.github.io/ABB-MobileDistribution/](https://abb-public.github.io/ABB-MobileDistribution/)

## 📋 Overview

This website serves as a centralized repository and viewer for privacy policies and legal documents across 50+ ABB mobile applications including:

- **RobotStudio** - Robot programming and simulation
- **ABB Product Scanner** - Product identification and information
- **Service Assist** - Field service support
- **Drive Insight** - Motor drive analytics
- **MyFactory** - Factory management
- **Code of Conduct** - Multi-language corporate guidelines
- And many more...

## ✨ Features

- **Policy Viewer**: Dynamic markdown rendering with syntax highlighting
- **Multi-App Support**: Centralized management of 50+ app policies
- **Code of Conduct**: Multi-language support (EN, CN, DE, ES, SE)
- **Acknowledgments**: Third-party library credits and licenses
- **Responsive Design**: ABB-branded UI across all devices
- **GitHub Pages Deployment**: Automated CI/CD pipeline

## 🏗️ Project Structure

```
privacy-site/
├── public/
│   ├── policies/          # Privacy policy markdown files for each app
│   │   ├── apps.json      # Index of all apps and their documents
│   │   ├── robotstudio/
│   │   ├── driveinsight/
│   │   └── ...
│   ├── acknowledgments/   # Third-party acknowledgments
│   ├── assets/            # Fonts, images, and static resources
│   └── images/            # App-specific images
├── src/
│   ├── pages/             # React page components
│   │   ├── PolicyList.jsx
│   │   ├── PolicyViewer.jsx
│   │   ├── CodeOfConduct.jsx
│   │   └── Closer.jsx
│   ├── components/        # Reusable components
│   ├── scripts/           # Build scripts
│   │   └── generateIndex.js
│   ├── styles/            # CSS and styling
│   └── App.js             # Main routing configuration
└── build/                 # Production build output
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes.

### Building for Production

```bash
# Build the application
npm run build
```

This command:
1. Copies all policy files from `src/policies/` to `public/`
2. Copies acknowledgments, assets, and images
3. Generates the policy index file
4. Creates an optimized production build in the `build/` folder

## 📦 Deployment

### Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will automatically build and deploy to the `gh-pages` branch.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server on port 3000 |
| `npm test` | Launch test runner in watch mode |
| `npm run build` | Create production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run eject` | Eject from Create React App (⚠️ one-way operation) |

## 📝 Adding a New App Policy

1. **Create policy folder:**
   ```bash
   mkdir src/policies/your-app-name
   ```

2. **Add policy markdown:**
   ```bash
   # Create index.md with your privacy policy content
   echo "# Your App Privacy Policy" > src/policies/your-app-name/index.md
   ```

3. **Update apps.json:**
   ```json
   {
     "your-app-name": [
       "index.md"
     ]
   }
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **React Markdown** - Markdown rendering
- **Highlight.js** - Syntax highlighting for code blocks
- **Rehype** - HTML processing plugins (sanitize, highlight, raw)
- **Create React App** - Build toolchain
- **GitHub Pages** - Hosting platform

## 📄 License

This project is maintained by ABB for internal mobile application policy management.

## 🤝 Contributing

This is an internal ABB project. For updates or changes:

1. Create a feature branch
2. Add/update policies in `src/policies/`
3. Test locally with `npm start`
4. Submit a pull request for review
5. Deploy after approval using `npm run deploy`

## 📧 Contact

For questions or support regarding policy content, contact the ABB Mobile App Distribution team.

---

Built with ❤️ by ABB | Last updated: March 2026
