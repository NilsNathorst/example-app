# example-app

A small token-driven design system demo: **Figma → JSON → TypeScript → Storybook**.

## Figma file

Source of truth lives in Figma:
**[Nils-Testar — Figma file](https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar)**

Three Local Variable collections:

- `Primitives` — single mode. Raw values (colors, spacing, radius, typography primitives).
- `Semantic Light` — single mode, color aliases.
- `Semantic Dark` — single mode, color aliases.

## Quick start

```sh
npm install
npm run sync-tokens   # regenerates src/theme/{primitives,semantic}.ts from src/theme/tokens.json
npm run storybook     # opens http://localhost:6006
```

## The workflow

1. Edit Figma variables.
2. Export with the [bb-extract](https://www.figma.com/community/plugin/1263445449777331392) plugin → save the JSON as `src/theme/tokens.json`.
3. `npm run sync-tokens` → `scripts/sync-tokens.mjs` rewrites `src/theme/primitives.ts` and `src/theme/semantic.ts` (alias-resolved, float-precision rounded). Both files are marked `@generated`.
4. Commit.

## Repo layout

```
src/
  theme/
    tokens.json         # Figma export — the input
    primitives.ts       # @generated raw token values
    semantic.ts         # @generated light + dark palettes
    typography.ts       # hand-authored text styles (Figma Variables can't bundle multi-property text styles)
    index.ts            # merges everything + augments styled-components DefaultTheme
    *.stories.tsx       # Storybook stories for tokens + theme palettes
  ui-lib/
    Button.tsx, Card.tsx, Input.tsx, Text.tsx
    *.stories.tsx       # one story per component
scripts/
  sync-tokens.mjs       # the JSON → TS generator
.storybook/
  main.ts, preview.tsx, preview-head.html
```
