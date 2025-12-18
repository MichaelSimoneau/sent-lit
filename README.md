# Sentinel Litigation (SentLit)

**Consumer Fraud Protection & Legal Advocacy Platform**

SentLit is a modern, cross-platform application designed to empower consumers with legal insights and advocacy tools. Built with a mobile-first philosophy, it leverages **Expo (React Native)** for a unified frontend experience and **Firebase** with **Google Gemini AI** for intelligent backend services.

## 🚀 Overview

Sentinel Litigation aims to democratize access to legal information regarding consumer fraud. The platform provides users with tools to:
- **Assess potential cases** using AI-driven analysis.
- **Research legal precedents** relevant to their situation.
- **Gain consumer insights** through intelligent Q&A.
- **Connect with attorneys** and understand their rights.

The design is inspired by high-standards of professional UI/UX, ensuring trust, clarity, and accessibility for all users.

## ✨ Key Features

### 🤖 AI-Powered Legal Analysis
- **Case Assessment**: Users can submit case descriptions to be analyzed by Gemini AI (via Firebase Functions). The system evaluates case strength, identifies potential claims, and recommends next steps.
- **Legal Research**: Advanced precedent research capabilities powered by the `gemini-3-pro-preview` model, focusing on Illinois and Federal laws.
- **Consumer Insights**: Dynamic Q&A and tips generation to educate users on consumer rights.

### 📱 Cross-Platform Experience
- **Unified Codebase**: Built with Expo and React Native Web to run seamlessly on iOS, Android, and the Web.
- **Responsive Design**: Utilizing `NativeWind` (Tailwind CSS) for adaptive layouts that work from mobile phones to desktop screens.
- **Professional UI**: Clean, trustworthy interface with consistent typography, spacing, and color systems.

### 💼 Firm Resources
- **Practice Areas**: Detailed information on various legal practice areas.
- **Attorney Profiles**: Information about the legal team.
- **Blog & Resources**: Educational content and news updates.
- **Secure Portal**: Client portal integration for case management.

## 🛠 Tech Stack

### Frontend
- **Framework**: [Expo](https://expo.dev/) (SDK 52) / React Native
- **Language**: TypeScript
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS v3)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **State Management**: React Query (`@tanstack/react-query`)

### Backend & Services
- **Serverless**: [Firebase Functions](https://firebase.google.com/docs/functions) (v2, Gen 2)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI Engine**: [Google Gemini API](https://ai.google.dev/) (`gemini-2.5-pro`, `gemini-3-pro-preview`)
- **Hosting**: Firebase Hosting

### Deployment
- **Web**: Firebase Hosting
- **Mobile**: Expo Application Services (EAS)

## 📂 Project Structure

```bash
sent-lit/
├── app/                  # Expo Router pages and layouts
│   ├── (tabs)/           # Main tab navigation
│   ├── firm-overview/    # Firm specific pages
│   ├── portal/           # Client portal section
│   └── ...
├── src/
│   ├── components/       # Reusable UI components
│   ├── config/           # App configuration (AI, etc.)
│   ├── services/         # API & Backend integration (Firebase, AI)
│   ├── types/            # TypeScript definitions
│   └── utils/            # Helper functions
├── functions/            # Firebase Cloud Functions (Backend)
│   └── src/index.ts      # Main entry point for serverless functions
├── assets/               # Static assets (images, fonts)
└── ...config files       # (firebase.json, tailwind.config.js, etc.)
```

## ⚡ Getting Started

### Prerequisites
- Node.js (v20 or v22 recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd sent-lit
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd functions
    npm install
    cd ..
    ```

### Environment Configuration

1.  **Frontend (.env):**
    Create a `.env` file in the root directory based on `env.example`. You need your Firebase project configuration:
    ```bash
    EXPO_PUBLIC_FIREBASE_API_KEY=your_key
    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
    EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_id
    # ... see env.example for full list
    ```

2.  **Backend (Functions):**
    For local development, you can set the Gemini API key in `functions/.env`:
    ```bash
    EXPO_SECRET_GEMINI_API_KEY=your_gemini_api_key
    ```
    For production, use Firebase Secrets:
    ```bash
    firebase functions:secrets:set GEMINI_API_KEY
    ```

### Running the App

1.  **Start the Expo Development Server:**
    ```bash
    npx expo start
    ```
    - Press `w` for Web
    - Press `i` for iOS Simulator
    - Press `a` for Android Emulator

2.  **Start Firebase Emulators (Optional - for local backend testing):**
    ```bash
    npm run emulators
    ```

## 📜 Scripts

- `npm start`: Start the Expo development server.
- `npm run android` / `ios` / `web`: Start for specific platforms.
- `npm run build:web`: Export the web app to the `dist` folder.
- `npm run deploy`: Deploy functions and hosting to Firebase.
- `npm run deploy:eas`: Deploy mobile apps via EAS.

## 🚀 Deployment

### Web (Firebase Hosting)
The web application is deployed to Firebase Hosting.
1.  Build the web project: `npm run build:web`
2.  Deploy: `npm run deploy:web`

### Backend (Firebase Functions)
To update the backend logic:
1.  Navigate to functions: `cd functions`
2.  Build and deploy: `npm run deploy` (from root) or `firebase deploy --only functions`

### Mobile (EAS)
Use Expo Application Services to build and submit your mobile apps.
```bash
eas build --platform all
```

## ⚖️ License
[MIT License](LICENSE)

---
*Built with ❤️ for consumer advocacy.*
