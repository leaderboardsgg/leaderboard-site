# leaderboards.gg

The frontend for the leaderboards.gg website. Backend repo: https://github.com/leaderboardsgg/leaderboard-backend

## Discord

- If you have any questions, comments, concerns that don't fit in GitHub please [direct them here!](https://discord.com/invite/TZvfau25Vb)

## Contributing

If you'd like to start contributing to the project please check [`CONTRIBUTING.md`](https://github.com/leaderboardsgg/leaderboard-site/blob/main/CONTRIBUTING.md) first to make sure things go as smoothly as possible!

## VSCode Setup

- Install the recommended extensions

  - These come from `/.vscode/extensions.json`
  - They will also appear in the extensions tab in the recommended dropdown alongside some automatically suggested extensions from VSCode itself.

- Make sure if you have done Vue 2 dev in VSCode to disable Vetur extension for the workspace
- Enable Volar [Takeover mode](https://vuejs.org/guide/typescript/overview.html#takeover-mode)

## Build Setup

- set node version with nvm
  - $ `nvm use`
  (You may need to run `nvm install` first)

- install pnpm (Performant NPM)
  - $ `npm install -g pnpm`

- install dependencies
  - $ `pnpm install`

- run `nuxt generate`
  - $ `pnpm generate`

- run and connect to backend
  
  - Create a copy of `.env.example` named `.env` file with the `BACKEND_BASE_URL` set to the address of the backend.
    1. you can use `https://lbgg-backend-dev.fly.dev` as is in the `.env.example` file if you don't want to run the backend locally
    2. You can download the backend project and run it locally [here](https://github.com/leaderboardsgg/leaderboard-backend)

- serve with hot reload at `localhost:3000`
  - $ `pnpm dev`

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

### Other commands you can use

- build for production and launch server
  - $ `pnpm build`
  - $ `pnpm preview`

- generate static project
  - $ `pnpm generate`

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Development Environment

If you're using VSCode (which we highly recommend) please install the 6 extensions that we have in our `extensions.json` file. This in the extensions section then shows you ESLint, Prettier, Vetur, NPM Intellisense, TailwindCSS IntelliSense, PostCSS Language Support, etc. This will allow you to have proper automatic linting, formatting, and more with no extra setup!

## Vue File Structure

Check out `FILESTRUCTURE.md` if you are unsure how things are laid out in this repository.
