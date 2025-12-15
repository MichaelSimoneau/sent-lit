# Firebase Functions

This directory contains Firebase Cloud Functions that handle AI-powered features using the Gemini API.

## Setup

1. Install dependencies:
```bash
cd functions
npm install
```

2. Configure the Gemini API key:

   **Option A: Using Firebase Secrets (Recommended for production)**
   ```bash
   firebase functions:secrets:set GEMINI_API_KEY
   # Enter your API key when prompted
   ```

   **Option B: Using environment variable (For local development)**
   Create a `.env` file in the `functions/` directory:
   ```
   EXPO_SECRET_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Note: Firebase Secrets require a Blaze (pay-as-you-go) plan. For local development, use the `.env` file.

## Development

- **Build**: `npm run build`
- **Serve locally**: `npm run serve` (starts emulator)
- **Deploy**: `npm run deploy` or `firebase deploy --only functions`

## Functions

- `assessCase`: Analyzes a consumer fraud case description and returns an assessment
- `getConsumerInsight`: Generates a random consumer fraud Q&A or tip
- `researchLegalPrecedent`: Researches legal precedents for a given query

## Environment Variables

The functions will look for the API key in this order:
1. `process.env.GEMINI_API_KEY` (Firebase Secret - when deployed)
2. `process.env.EXPO_SECRET_GEMINI_API_KEY` (Environment variable - for local development)

**Important**: When deploying, ensure the `GEMINI_API_KEY` secret is set using `firebase functions:secrets:set GEMINI_API_KEY`. The functions are configured to use this secret via `functions.runWith({ secrets: ['GEMINI_API_KEY'] })`.

