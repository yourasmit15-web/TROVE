# TROVE

A minimal, responsive music-discovery interface built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Current scope

- Responsive TROVE home/discovery UI
- Search/filter for demo tracks
- Play/pause-style interaction and bottom player
- No subscription/paywall flow
- Authentication entry point reserved for integration

## Authentication

The current frontend does **not** implement real authentication or store credentials/tokens. The Sign in control is only a UI integration point. A production auth provider should be connected before accepting credentials.
