# Copilot Instructions for Sentinel Litigation

This project is a multi-platform React Native application built with **Expo**, **NativeWind** (Tailwind CSS), **React Query**, and **Firebase**. It targets iOS, Android, and Web (`sentinel-litigation.web.app`).

## 🏗 Architecture & Tech Stack

- **Framework**: Expo (Managed Workflow) with `expo-router` for file-based navigation.
- **Styling**: NativeWind (Tailwind CSS).
- **State/Data**: React Query (`@tanstack/react-query`) for server state.
- **Backend**: Firebase (Auth, Firestore, Hosting).
  - **Web**: Firebase JS SDK (`firebase/app`, etc.).
  - **Native**: React Native Firebase (`@react-native-firebase/app`, etc.).
- **Builds**: EAS (Expo Application Services) for native, Firebase Hosting for web.

## 📂 Project Structure

- `app/`: Routes and Layouts (Expo Router).
  - `_layout.tsx`: Root layout with Providers (QueryClient, Auth).
  - `index.tsx`: Home screen.
- `src/`: Core application logic.
  - `components/`: Reusable UI components (Presentational).
  - `screens/`: (Optional) Screen logic if extracted from `app/`.
  - `hooks/`: Custom React hooks.
  - `queries/`: React Query hooks (Data fetching).
  - `services/`: External service integration (Firebase config).
    - `firebase.ts`: Native implementation.
    - `firebase.web.ts`: Web implementation.
  - `types/`: TypeScript definitions.
  - `utils/`: Helper functions.
- `.github/workflows/`: CI/CD pipelines.
- `eas.json`: EAS build configuration.
- `firebase.json`: Firebase hosting configuration.

## 🚀 Development Workflow

### Commands
- **Start Dev Server**: `npx expo start`
  - Press `w` for Web, `i` for iOS, `a` for Android.
- **Type Check**: `tsc --noEmit`
- **Lint**: `npm run lint` (if configured).

### Environment Variables
- Store secrets in `.env`.
- Public variables exposed to client **MUST** start with `EXPO_PUBLIC_` (e.g., `EXPO_PUBLIC_FIREBASE_API_KEY`).
- See `.env.example` for required keys.

## 📱 Platform Specifics

### Firebase Integration
Since native and web use different SDKs, use platform extensions:
- Import from `src/services/firebase` in your code.
- Metro will resolve `firebase.web.ts` for web and `firebase.ts` for native automatically.
- **Do not** import `firebase/auth` or `@react-native-firebase/auth` directly in shared components; use the exported instances.

### NativeWind (Styling)
- Use standard Tailwind classes in `className` prop.
- Example: `<View className="flex-1 bg-white p-4">`.
- Ensure `global.css` is imported in `app/_layout.tsx`.

## 🛠 Integration Patterns

### Data Fetching (React Query)
- Create custom hooks in `src/queries/` for all data operations.
- Example:
  ```typescript
  export const useUserProfile = (userId: string) => {
    return useQuery({
      queryKey: ['user', userId],
      queryFn: () => fetchUserProfile(userId),
    });
  };
  ```

### Navigation
- Use `expo-router` components: `<Link>`, `<Stack>`, `<Tabs>`.
- Use `useRouter()` hook for programmatic navigation.
- Define routes by creating files in `app/`.

## 📦 CI/CD (GitHub Actions)

- **EAS Build**: Triggered on push to `main` (via `.github/workflows/eas-build.yml`).
- **Web Deploy**: Deploys to Firebase Hosting on push to `main` (via `.github/workflows/web-deploy.yml`).

## 💡 Best Practices

1. **Platform Compatibility**: Always verify UI on both Web and Native (iOS/Android).
2. **Types**: Use TypeScript strictly. Define interfaces in `src/types/`.
3. **Component Reusability**: Keep components pure and styling-focused; move logic to hooks.

