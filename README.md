# @nckrtl/launch-ui

React component library and Vite toolchain for building Laravel + React + Inertia applications. Built on Base UI and shadcn.

## Installation

```bash
npm install @nckrtl/launch-ui
```

## Usage in Vite

```typescript
// vite.config.ts
import { defineLaunchConfig } from '@nckrtl/launch-ui/vite';

export default defineLaunchConfig();
```

## Features

- **Vite Integration**: Zero-config Vite setups for Laravel + React + Inertia projects via `defineLaunchConfig()`.
- **i18n Support**: Simple translation helpers available via `@nckrtl/launch-ui/i18n`.
- **Legacy Fallback**: Backwards-compatible aliases for `@nckrtl/craft-ui-react/*` and `defineCraftConfig`.
