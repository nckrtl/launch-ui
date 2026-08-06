# @hardimpactdev/launch-ui

React component library and Vite toolchain for building Laravel + React + Inertia applications. Built on Base UI and shadcn with Agentation integration.

## Installation

```bash
npm install @hardimpactdev/launch-ui
```

## Usage in Vite

```typescript
// vite.config.ts
import { defineLaunchConfig } from '@hardimpactdev/launch-ui/vite';

export default defineLaunchConfig();
```

## Features

- **Vite Integration**: Zero-config Vite setups for Laravel + React + Inertia projects via `defineLaunchConfig()`.
- **i18n Support**: Simple translation helpers available via `@hardimpactdev/launch-ui/i18n`.
- **Agentation**: Integrated UI feedback toolbar integration via `@hardimpactdev/launch-ui/agentation`.
- **Legacy Fallback**: Backwards-compatible aliases for `@hardimpactdev/craft-ui-react/*` and `defineCraftConfig`.
