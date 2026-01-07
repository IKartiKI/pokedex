# Pokedex

This is Pokedex — a basic React Native (Expo) app that displays Pokémon names and types with simple file-based routing and other basic features.

## Quick start

Install dependencies and start the dev server:

```bash
npm install
npx expo start
```
````markdown
# Pokedex

Pokedex is a small React Native app (built with Expo) that fetches Pokémon from the public PokéAPI and displays basic cards with name, types and images. It uses file-based routing provided by Expo Router.

## Quick start

Install dependencies and start the dev server:

```bash
npm install
npx expo start
```

To clear Metro's cache if you hit bundler issues:

```bash
npx expo start -c
```

Edit the UI in `app/index.tsx`. Routes live in the `app/` folder.

## Tech stack

- Framework: Expo (React Native)
- Language: TypeScript
- Router: Expo Router (file-based routing)
- Styling: React Native `StyleSheet`
- Data source: PokéAPI (https://pokeapi.co)

## Project setup / environment

- Node: recommended v18.16.0+ or Node 20+ (Metro and some dependencies use modern JS features).
- Install dependencies: `npm install` (or `yarn`)
- Dev server: `npx expo start`
- Reset starter app (moves existing app to `app-example`): `npm run reset-project`

## Features

- Fetches a paginated list of Pokémon from PokéAPI and loads details in parallel.
- Displays front/back sprites, primary type, and colored card backgrounds mapped to type.
- Basic file-based routing (example: `app/details.tsx`).

## Type color mapping (in `app/index.tsx`)

- grass: #7AC74C — Bulbasaur
- fire: #EE8130 — Charmander
- water: #6390F0 — Squirtle
- bug: #A6B91A — Caterpie
- normal: #A8A77A — Rattata
- poison: #A33EA1 — Ekans
- electric: #F7D02C — Pikachu
- ground: #E2BF65 — Sandshrew
- fairy: #D685AD — Clefairy
- fighting: #C22E28 — Machop
- psychic: #F95587 — Abra
- rock: #B6A136 — Geodude
- ghost: #735797 — Gastly
- ice: #96D9D6 — Shellder
- dragon: #6F35FC — Dratini
- dark: #705746 — Umbreon
- steel: #B7B7CE — Magnemite
- flying: #A98FF3 — Pidgey

## File structure (important files)

- `app/index.tsx` — main screen (fetch + list rendering)
- `app/details.tsx` — details route (ensure it exports a default component)
- `app/_layout.tsx` — app layout for Expo Router

## Known issues & troubleshooting

- `TypeError: configs.toReversed is not a function`
	- Upgrade Node to v18.16.0+ or Node 20+. Then reinstall dependencies.

- `Unable to resolve "react-native-reanimated/lib/typescript/Animated"`
	- Avoid importing Reanimated internals. For plain scrolling use `import { ScrollView } from 'react-native'`.

- `Route "./details.tsx" is missing the required default export` or `Screen names must be unique: details,details`
	- Ensure `app/details.tsx` exports a default React component and remove duplicate route files.

## Contributing / next steps

- Extract `colorByType` to `app/colors.ts` and export types for reuse.
- Add accessibility contrast checks for text over colored backgrounds.
- Add small unit or snapshot tests for rendering cards.

---

If you want, I can extract the colors to `app/colors.ts` or fix the `details.tsx` routing warning next.

````
