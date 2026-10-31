# Contributing to leaderboards.gg

We appreciate your help!

## Discord

- If you have any questions, comments, concerns that don't fit in GitHub please [direct them here!](https://discord.com/invite/TZvfau25Vb)

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
1. Name a branch on your fork something descriptive for this change (e.g. `UpdateNavbarStyles`).
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
  - prefer `catch(error)` over `catch(e)`
- Two major philosophies we adhere to are KISS (keep it super simple) and DRY (don't repeat yourself)
  - In general try not to make your code too "clever" if it's possible to do it in a less "clever" way so that it's easily read by other contributors.
- A good rule is to try and write code that does not need comments to explain it
  - Sometimes you can't avoid this so add a comment when it's not obvious, or incredibly obtuse.
- Ensure cross-browser compatability, when in doubt check the [Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API#browser_compatibility) section on MDN.

### Layout/ Styling (HTML & CSS)

- Major focus should be on a mobile-first style responsive design
  - We want the layout to scale across phones, tablets, laptops, small monitors, and large monitors.
- We focus on [Semantic HTML](https://web.dev/learn/html/semantic-html), this leads to more readable markup, better out of the box accessibility and more.

### JavaScript (TypeScript)

- Include proper error handling for any `async` functions.
  - As in, anything `async` the promise can fail for a multitude of reasons given the reason for it's asynchronicity. So make sure to handle that so people don't run into esoteric issues.
- Prefer usage of `async/await` for asynchronous functions.
  - only use Promise syntax for needed more advanced Async programming that either can't be done or is harder to be done with `async/await`

### Nuxt/ Vue

- Make sure any data and prop names are as descriptive as possible.
- Try to move any repetitive elements into child components to reduce clutter in parent components.
- Make all components compatible with server side rendering where possible.

### Git

- Try to have an informative branch name for others e.g. `{ghusername}/{descriptive-name}`.
  - Do not make pull requests from `main`.
- Try to keep commit line length below 80 characters.
- Commits should be as [atomic](https://www.freshconsulting.com/insights/blog/atomic-commits/) as possible.
