# redux-v-context

This is a React app written in TypeScript.

## Prerequisites

- Node 16 (see [.node-version](./.node-version))
- Yarn 1.22.17 or higher

It is strongly recommended that you use a version manager like [nvm](https://github.com/nvm-sh/nvm), [nodenv](https://github.com/nodenv/nodenv), or [asdf](https://asdf-vm.com/) to ensure the correct Node version. If you use asdf, make sure to add the nodejs plugin and [enable legacy version files](https://github.com/asdf-vm/asdf-nodejs#nvmrc-and-node-version-files).

## Quick start

Install dependencies:

```
yarn install
```

Start the server:

```
yarn start
```

This will launch the app at:

<http://localhost:3000/>

## Task reference

- **`yarn start`** starts the development server listing on port 3000. Changes to .js or .scss files automatically refresh in the browser.
- **`yarn test`** runs tests in "watch" mode, automatically focusing on tests or code that were modified since the last commit. Press the `a` key after the test runner has started to watch all tests in the project.
- **`yarn test:coverage`** runs all tests, prints coverage stats, and then exits.
- **`yarn lint`** runs all ESLint checks and then exits.
- **`yarn build`** generates an optimized bundle of the app into the `build` directory, suitable for deployment.

---

_Generated by [spraygun-react-ts](https://github.com/carbonfive/spraygun-react-ts)_