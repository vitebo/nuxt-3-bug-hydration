# Nuxt 3 Bug Hydration

This repo is a minimal reproduction of a hydration bug in Nuxt 3 when use some lib that use `@vitejs/plugin-vue` to compile the vue files.

## Reproduction

1. Run `nvm install` to install the correct version of node
2. Run `npm install` to install the dependencies
3. Run `npm run build -w library` to build the library
4. Run `npm run dev -w app` to start the app

## Explanation

In the `library` we have the `ExternalComponent` component that simply render a `div` with multiple named slots.
In the `app` when we use the `ExternalComponent` component with `v-for` we can see that the slots are not hydrated correctly.
In the `app` when we use the `LocalComponent` component with `v-for` we can see that the slots are hydrated correctly.
`LocalComponent` is a copy of `ExternalComponent` but with the `@vitejs/plugin-vue` removed.

This bug only happens when we use the `@vitejs/plugin-vue` to compile the vue files, with local components the hydration works fine.
This bug only happens when we use `v-for` and try to access the current item in the slot.
