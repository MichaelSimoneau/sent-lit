---
name: Expo Setup and Copilot Instructions
overview: Initialize Expo React Native project with iOS/Android/Web targets, configure EAS build, GitHub workflows, Firebase hosting, integrate NativeWind/React Query/Firebase, then generate comprehensive copilot instructions based on the actual project structure.
todos:
  - id: init-expo
    content: Initialize Expo project with TypeScript template for iOS/Android/Web
    status: in_progress
  - id: setup-eas
    content: Configure EAS with build profiles for development/preview/production
    status: pending
    dependencies:
      - init-expo
  - id: setup-firebase
    content: Initialize Firebase project, configure hosting, Auth, and Firestore
    status: pending
    dependencies:
      - init-expo
  - id: install-deps
    content: Install NativeWind, React Query, Firebase SDKs, and related dependencies
    status: pending
    dependencies:
      - init-expo
  - id: config-nativewind
    content: Configure NativeWind with Tailwind config, Metro config, and PostCSS
    status: pending
    dependencies:
      - install-deps
  - id: config-react-query
    content: Set up React Query provider and default configuration
    status: pending
    dependencies:
      - install-deps
  - id: config-firebase
    content: Create Firebase initialization module and environment config
    status: pending
    dependencies:
      - install-deps
      - setup-firebase
  - id: create-structure
    content: Create src/ directory structure with foundational files and examples
    status: pending
    dependencies:
      - config-nativewind
      - config-react-query
      - config-firebase
  - id: github-workflows
    content: Create GitHub Actions workflows for EAS builds and Firebase deployment
    status: pending
    dependencies:
      - setup-eas
      - setup-firebase
  - id: generate-copilot-instructions
    content: Analyze project structure and generate comprehensive copilot instructions
    status: pending
    dependencies:
      - create-structure
      - github-workflows
---

# Expo Project Setup and Copilot Instructions Generation

## Phase 1: Expo Project Initialization

1. **Initialize Expo project** with TypeScript template

   - Use `npx create-expo-app@latest` with TypeScript
   - Configure for iOS, Android, and Web targets
   - Set project name: `sent-lit` or `sentinel-litigation`

2. **Configure EAS (Expo Application Services)**

   - Initialize EAS: `eas init`
   - Create `eas.json` with build profiles for:
     - Development (iOS/Android)
     - Preview (iOS/Android)
     - Production (iOS/Android)
     - Web build configuration
   - Configure app identifiers and bundle IDs

3. **Set up Firebase**

   - Initialize Firebase project for `sentinel-litigation.web.app`
   - Create `firebase.json` and `.firebaserc`
   - Configure Firebase hosting for web deployment
   - Set up Firebase Auth and Firestore
   - Add Firebase config files (`.env` for API keys)

## Phase 2: Dependencies and Configuration

4. **Install core dependencies**

   - NativeWind (Tailwind CSS for React Native)
   - React Query (@tanstack/react-query)
   - Firebase SDK (@react-native-firebase/app, auth, firestore)
   - Web-specific: Firebase web SDKs
   - Expo Router (if using file-based routing)

5. **Configure NativeWind**

   - Set up `tailwind.config.js`
   - Configure `metro.config.js` for NativeWind
   - Add PostCSS config for web
   - Create base styles and theme configuration

6. **Set up React Query**

   - Create query client provider wrapper
   - Configure default query options
   - Set up query devtools (development only)

7. **Configure Firebase**

   - Create Firebase initialization module
   - Set up Auth and Firestore instances
   - Create environment variable handling
   - Add Firebase web config for hosting

## Phase 3: GitHub Workflows

8. **Create GitHub Actions workflows**

   - `.github/workflows/eas-build.yml` - EAS builds for iOS/Android
   - `.github/workflows/web-deploy.yml` - Firebase hosting deployment
   - `.github/workflows/test.yml` - Run tests (if applicable)
   - Configure secrets for EAS and Firebase

## Phase 4: Project Structure

9. **Create directory structure**
   ```
   src/
     components/     # Reusable UI components
     screens/        # Screen components
     hooks/          # Custom React hooks
     services/       # API/Firebase services
     queries/        # React Query hooks
     utils/          # Utility functions
     types/          # TypeScript types
     constants/      # App constants
   ```

10. **Create foundational files**

    - App entry point with providers
    - Theme configuration
    - Navigation setup (if using Expo Router)
    - Base component examples

## Phase 5: Copilot Instructions Generation

11. **Analyze project structure**

    - Review all configuration files (EAS, Firebase, NativeWind, etc.)
    - Examine directory structure and patterns
    - Review GitHub workflow files
    - Check package.json scripts and dependencies

12. **Generate `.github/copilot-instructions.md`**

    - Document Expo multi-platform architecture (iOS/Android/Web)
    - Explain EAS build process and profiles
    - Document Firebase integration (Auth, Firestore, Hosting)
    - NativeWind styling conventions and platform-specific considerations
    - React Query patterns for data fetching
    - GitHub workflow deployment process
    - Platform-specific code patterns (web vs native)
    - Environment variable handling
    - Key directories and their purposes
    - Common development commands

## Key Files to Create/Modify

- `eas.json` - EAS build configuration
- `firebase.json` / `.firebaserc` - Firebase hosting config
- `tailwind.config.js` - NativeWind configuration
- `metro.config.js` - Metro bundler config for NativeWind
- `.github/workflows/*.yml` - CI/CD workflows
- `.github/copilot-instructions.md` - AI agent guidance
- `app.json` / `app.config.js` - Expo app configuration
- `package.json` - Dependencies and scripts
- `src/` directory structure with foundational files
- `.env.example` - Environment variable template

## Technical Considerations

- **Multi-platform**: Code must work across iOS, Android, and Web with platform-specific adaptations
- **Firebase**: Separate configs for native (Firebase SDK) vs web (Firebase JS SDK)
- **NativeWind**: Requires Metro config changes and PostCSS for web
- **EAS**: Build profiles for different environments and platforms
- **GitHub Actions**: Automated builds and deployments
- **React Query**: Centralized data fetching with caching and synchronization