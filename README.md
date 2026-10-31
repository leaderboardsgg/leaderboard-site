# leaderboards.gg

The frontend for the leaderboards.gg website. Backend repo: https://github.com/leaderboardsgg/leaderboard-backend

## Discord

- If you have any questions, comments, concerns that don't fit in GitHub please [direct them here!](https://discord.com/invite/TZvfau25Vb)

## Contributing

If you'd like to start contributing to the project please check [`CONTRIBUTING.md`](https://github.com/leaderboardsgg/leaderboard-site/blob/main/CONTRIBUTING.md) first to make sure things go as smoothly as possible!

## NO AI

We DO NOT want any contribution to be done from AI. This is a project to make software for humans, doing human activities, by humans. See [AGENTS.md](AGENTS.md) for more. We will reject all code clearly written from AI.

## Build Setup

```sh
# set node version with nvm
$ nvm install
$ nvm use

# install PNPM
$ npm install -g pnpm

# install dependencies
$ pnpm install

# run `nuxt generate`
$ pnpm generate
```

### Run and connect to backend

Create a copy of `.env.example` named `.env` file with the `BACKEND_BASE_URL` set to the address of the backend.

1. you can use `https://lbgg-backend-dev.fly.dev` as is in the `.env.example` file if you don't want to run the backend locally

2. You can download the backend project and run it locally [here](https://github.com/leaderboardsgg/leaderboard-backend)

- serve with hot reload at `localhost:3000`
  - $ `pnpm dev`

### Other commands you can use

- enable husky pre-commit hooks
  - $ `pnpm husky`
- disable husky pre-commit hooks
  - $ `git config --unset core.hooksPath`

## Development Environment

If you're using VSCode (which we highly recommend) please install the extensions that we have in our `extensions.json` file.
