# Contributing to leaderboards.gg

We appreciate your help!

## Before filing an issue

If you are unsure whether you have found a bug, please consider asking in [our discord](https://discord.gg/TZvfau25Vb) first.

Similarly, if you have a question about a potential feature, [the discord](https://discord.gg/TZvfau25Vb) can be a fantastic resource for first comments.

## Filing issues

Filing issues is as simple as going to [the issue tracker](https://github.com/leaderboardsgg/leaderboard-site/issues), and adding an issue using one of the templates as listed below:

- [Bug Report:](https://github.com/leaderboardsgg/leaderboard-site/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug_report.yml&title=Bug%3A+%7Bshort+description%7D) Create a report to help us improve
- [Feature Request:](https://github.com/leaderboardsgg/leaderboard-site/issues/new?assignees=&labels=enhancement%2Cneeds+triage&template=feature_request.yml&title=Feature+Request%3A+%7Bshort+description%7D) Suggest an idea to add support for this project
- [Suggest a task:](https://github.com/leaderboardsgg/leaderboard-site/issues/new?assignees=&labels=needs+triage&template=suggest_a_task.yml&title=Task%3A+%7Bshort+description%7D) Suggest an idea for improving this project without changing functionality

## Contributing code

### Example code contribution flow

1. Make a fork of this repo.
1. Name a branch on your fork something descriptive for this change (eg. `UpdateNavbarStyles`).
1. Commit your changes (Tip! Please read our [Style guide](#style-guide) to help the pull request process go smoothly).
1. Verify your changes work.
1. Push your branch.
1. Open a pull request to `leaderboardsgg/leaderboard-site`.
1. Get your pull request approved.
1. Get someone to click `Rebase and merge`.
1. Celebrate your amazing changes! 🎉

## Style guide

### General

- Be inclusive, this is a project for everyone.
- Be descriptive, it can be hard to understand abbreviations or short-hand.
- Make sure that your components are _responsive_.

### Nuxt/Vue

- Comments should be full sentences, starting with a capital letter and ending with punctuation.
- Comments above a function should start with the name of the thing being described.
- Make sure any data and prop names are as descriptive as possible.
- Try to move any repetitive elements into child components to reduce clutter in parent components.
- Use `async await` for any asynchronous functions.
- Include proper error handling for any `async` functions.
- Make all components compatible with server side rendering when possible.

### Git

- Try to have an informative branch name for others eg. `SRW-{issue number}-{ghusername}`.
  - Do not make pull requests from `main`.
  - Do not include slashes in your branch name.
    - Nested paths can act strange when other people start looking at your branch.
- Try to keep commit line length below 80 characters.
- All commit titles should be of the format `{area} {optional sub-area}: commit description`.
  - This will help people reading through commits quickly find the relevant ones.
  - Some examples might include:
    - `profile header: add support for badges`
    - `leaderboard: adjusted sidebar spacing`
- Commits should be as [atomic](https://www.freshconsulting.com/insights/blog/atomic-commits/) as possible.
