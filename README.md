# leaderboards.gg

The dream: src 2.0

The MVP (minimum viable product):
LTTP Leaderboards (starting with this because its an okay sized game with complex categories, and a db that we already have (or at least I think pinkus has it)
User Profiles
Run Uploads (or external linking)
Board Customization and good management tools.

## Contributing

If you'd like to start contributing to the project please check [`CONTRIBUTING.md`](https://github.com/leaderboardsgg/leaderboard-site/blob/main/CONTRIBUTING.md) first to make sure things go as smoothly as possible!

## Build Setup

- set node version with nvm
  $ `nvm use`
  (You may need to run `nvm install` first)

- install pnpm (Performant NPM)  
  $ `npm install -g pnpm`

- install dependencies  
  $ `pnpm install`

- run and connect to backend  
  $ Create a `.env` file with `BACKEND_BASE_URL` the address of your backend.  
  $ You can download the backend project and run it locally [here](https://github.com/leaderboardsgg/leaderboard-backend)

- serve with hot reload at `localhost:3000`  
  $ `pnpm dev`

- build for production and launch server  
  $ `pnpm build`  
  $ `pnpm start`

- generate static project  
  $ `pnpm generate`

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Development Environment

If you're using VSCode (which we highly reccomend) please install the 6 extensions that we have in our `extensions.json` file. This in the extensions section then shows you ESLint, Prettier, Vetur, NPM Intellisense, TailwindCSS IntelliSense, and PostCSS Language Support. This will allow you to have proper automatic Linting and Formatting with no extra setup!

## Vue File Structure

You'll find our Vue files in `components` and `pages`. The files are structured in the order: template, script, and style. One thing to note; we want to keep any and all styling in `<style>`. This means that we try not to use Tailwind's classes directly in a file's `<template>`. Rather, we make a class name, and in the file's `<style>`, call `@apply` on top of any extra styling.

### Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

#### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

#### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

#### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

#### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

#### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

#### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
