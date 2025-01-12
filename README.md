# KhulnaSoft UI

KhulnaSoft UI is a UI component library that implements [Pajamas](https://design.gitlab.com/), our
design system. KhulnaSoft UI is written in [Vue.js](https://vuejs.org) and its objectives are to:

- Create reusable UI components to accelerate frontend development.
- Create UI consistency for all components within KhulnaSoft.

See <https://khulnasoft.github.io/khulnasoft-ui/> for documentation.

## Usage

1. To use KhulnaSoft UI in your project, add it as a dependency:

    ```sh
    yarn add @khulnasoft/ui
    ```

    > **Note:** Make sure to also install KhulnaSoft UI's peer dependencies. Refer to the
    > [`package.json`](./package.json) for the list of peer dependencies and their expected versions.

1. In your main entrypoint **before** importing or using any component:

    ```javascript
    import setConfigs from '@khulnasoft/ui/dist/config'

    setConfigs()
    ```

    This will set the global configs used by KhulnaSoft UI.

1. Include the required stylesheets in your app. Refer to the [CSS docs](/doc/css.md) for
   installation options.

1. Import the components as desired:

    ```javascript
    import { GlButton } from '@khulnasoft/ui';
    ```

    > **Note:** KhulnaSoft UI is compatible with tree-shaking, you may enable this in your project to
    > reduce bundle sizes.

## Quick start - development

**Note:** KhulnaSoft UI isn't designed to be built on Windows natively. Either
[WSL](https://learn.microsoft.com/en-us/windows/wsl/) or
[GitPod](https://www.gitpod.io/docs/configure/authentication/gitlab) can be used to set up a
UNIX-like environment in which to build it.

Make sure you have [Node](https://nodejs.org/en/) 16.x (LTS) and [Yarn](https://yarnpkg.com/) 1.22
or newer.

```sh
# Clone the project
git clone git@github.com:khulnasoft/khulnasoft-ui.git

# Navigate to the root of the project
cd khulnasoft-ui

# Install all the dependencies of the project
yarn # or yarn install

# Build and launch storybook to see the components in the browser
yarn storybook
```

Go to <http://localhost:9001/>

## Testing

### Unit tests

Components’ unit tests live in the `tests/components`. The tests are organized following the same
directory structure used to organize components.

- `yarn test:unit` runs all unit tests.

- `yarn test:unit:watch` runs all unit tests in watch mode.

- `yarn test:unit:debug` runs all unit tests and allow to attach a debugger to the test runner process.

- `yarn jest [name_pattern]` runs spec files that match the specified name pattern.

#### Examples

- `yarn jest datepicker` will match all spec files with a name that contains the word _datepicker_.

- `yarn jest datepicker -t "when draw event is emitted"` goes a step further and only runs the test
with a description that matches the argument passed to the `t` flag.

### SCSS tests

Even though we try to avoid writing complex SASS code to maintain CSS complexity low, we’ve
implemented some functions that benefit from automated testing. SASS tests live in the `tests/scss`
directory. KhulnaSoft UI uses [sass-true](https://www.oddbird.net/true/) to implement these tests, and
jest run them.

`yarn jest run_scss_tests` runs all SCSS tests.

### Visual regression tests

KhulnaSoft UI uses visual snapshot tests to prevent introducing regressions with CSS and
layout changes on components. Read more on this in the [visual testing documentation](doc/contributing/visual_testing.md).

#### KhulnaSoft visual regression tests

KhulnaSoft UI components are a reference implementation of the
[Pajamas Design System components](https://design.gitlab.com/components/status). These components
should conform with the design system specs, and they should look correct in the pajamas website and
the KhulnaSoft product. Please see [Debugging KhulnaSoft UI issues with KhulnaSoft product CSS](doc/debugging-khulnasoft-ui-with-gitlab-css.md)
for information on how to debug issues with KhulnaSoft product CSS in KhulnaSoft UI.

### End to end tests

Components’ end to end tests live in the `cypress/e2e` folder. See our
[end to end testing documentation](doc/contributing/end_to_end_test.md) for more details.

`yarn run cypress open` runs Cypress locally to run end to end tests.

### Design tokens

KhulnaSoft UI uses design tokens to maintain a single source of truth that, through automation,
can be formatted for different uses. Read more on this in the [design tokens documentation](doc/contributing/design_tokens.md).

## Releases

See [Updating KhulnaSoft UI Packages](doc/updating-khulnasoft-ui-packages.md) for information on how the
`@khulnasoft/ui` package is kept up to date in various projects.

## Contributing guide

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to add new components and
contribute in general to KhulnaSoft UI.

### FAQs

Any question? Have a look at our [FAQ.md](FAQ.md), you might find the answer there.
