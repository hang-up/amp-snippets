# Contributing

Thanks for your interest in contributing to &:amp snippets! Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create [an issue](https://github.com/tailwindcss/tailwindcss/issues) to first discuss any significant new features. ** This doesn't apply for adding new snippets! **

## Coding standards

Our code formatting rules are defined in [.eslintrc](https://github.com/tailwindcss/tailwindcss/blob/master/.eslintrc.json). You can check your code against these standards by running:

```sh
npm run lint
```

To automatically fix any style violations in your code, you can run:

```sh
npm run lint -- --fix
```

## Building snippets.json

After contributing a new snippet, a build process still needs to happen manually in order to pick up and package your changes. At this moment, this is still a manual process but will be automated at some point. You can run:

```sh
node dist/index.js
```