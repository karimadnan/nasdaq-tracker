# Org

This repository is an Nx monorepo containing two applications:

nasdaq-tracker-web – A web app built with React + Vite

To serve the web app locally you need to:

1- configure your .env file with the following keys

```
VITE_API_URL= Your base API domain
VITE_API_TOKEN= Your Polygon API key
```

2- run `npx nx run nasdaq-tracker-web:serve`

nasdaq-tracker-mobile – A mobile app built with React Native

## Modules

The modules were built with universal compatability in mind to work in both Web and Mobile envs

## UI

The UI components were built using **[Tamagui](https://tamagui.dev/)**
