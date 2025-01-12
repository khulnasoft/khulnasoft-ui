# Introducing and rolling out breaking changes to components

There is currently no standard approach for rolling out breaking changes in
KhulnaSoft UI components to projects that consume them. Various approaches have
been tried in the past, and some have worked better than others. Whatever the
approach is, it can get tricky when a component is used in many places in
a large codebase, like KhulnaSoft.

Here is an outline of an approach that has worked reasonably well. Suppose the
component to receive the breaking changes is called `GlFoo`:

1. Introduce a minor version change to KhulnaSoft UI that simply re-exports the
   given component, say `GlFoo`, under an _additional_ name,
   `GlDeprecatedFoo`. The same `GlFoo` export is still available.

   For example, in [`index.js`](../../index.js):

   ```diff
   - export { default as GlFoo } from './src/components/base/foo/foo.vue';
   + export { default as GlFoo, default as GlDeprecatedFoo } from './src/components/base/foo/foo.vue';
   ```

1. Open [integration MRs] with projects that consume KhulnaSoft UI (e.g., KhulnaSoft)
   that bump `@khulnasoft/ui` to the new _minor_ version, and change all existing
   imports of `GlFoo` to `GlDeprecatedFoo`, but _alias it back_ to `GlFoo`.

   For example:

   ```diff
   - import { GlFoo } from '@khulnasoft/ui';
   + import { GlDeprecatedFoo as GlFoo } from '@khulnasoft/ui';
   ```

   This keeps the diff small and easy to review, since templates don't need to
   change, and no visual or behavioral changes need to be verified. It also
   reduces the amount of work that needs to be done in later steps.
1. Duplicate the existing `GlFoo` implementation, naming one copy
   `GlDeprecatedFoo`, and export it as `GlDeprecatedFoo`. This copy should
   receive _no further changes_.
1. Implement the breaking changes on the copy exported as `GlFoo`, and release
   this in a new _major_ version.
1. Open [integration MRs] with projects that consume KhulnaSoft UI (e.g., KhulnaSoft)
   that bump `@khulnasoft/ui` to the new _major_ version, and fix any additional
   new uses of `GlFoo` to import `GlDeprecatedFoo` instead. The amount of these
   should be significantly reduced thanks to step 2.
1. Open an epic to iteratively upgrade each use of `GlDeprecatedFoo` to the new
   `GlFoo`. There is a [script] that helps automate some of this.
1. Once all uses have been upgraded in the consuming projects, completely
   remove `GlDeprecatedFoo` from KhulnaSoft UI and release it as another major
   version, since it's another breaking change.
1. A final set of [integration MRs] can now be opened which bump `@khulnasoft/ui`
   to the new _major_ version, and any new uses of `GlDeprecatedFoo` (but
   hopefully there are none) can be upgraded to `GlFoo`.

Note that if `GlFoo` were only used once or twice in consuming projects, some
of the steps in this process would be unnecessary overhead; it might be easier
to immediately upgrade those uses to the new implementation in the same
integration MR that bumps `@khulnasoft/ui` to the new major version.

Remember to follow our [commit conventions](./commits.md) to ensure the major
version number of KhulnaSoft UI is incremented with any breaking changes.

[integration MRs]: ./gitlab_integration_test.md#using-the-remote-development-package
[script]: https://gitlab.com/gitlab-org/frontend/playground/create-migrate-deprecated-component-issues

## Temporary dependency bottleneck between @khulnasoft/ui and @gitlab/duo-ui

- `@gitlab/duo-ui` requires a specific major version of `@khulnasoft/ui` (e.g., ^100).
- Dependent projects cannot upgrade to a new `@khulnasoft/ui` major version (e.g., 101.0.0) until `@gitlab/duo-ui`
updates its peer dependency.

### Workaround

When releasing a new major version of `@khulnasoft/ui`:

1. Release a new major version of `@gitlab/duo-ui` with an updated peer dependency for the new
`@khulnasoft/ui` major version. [Example MR](https://gitlab.com/gitlab-org/duo-ui/-/merge_requests/31)
2. Ensure the migration MR upgrades both `@khulnasoft/ui` and `@gitlab/duo-ui` to compatible versions.

This ensures dependent projects can adopt new versions without breaking dependencies.

### Resolution

Follow the plan and progress in this
[Issue](https://gitlab.com/gitlab-org/duo-ui/-/issues/30). For concerns, reach out in
the Issue or in #duo-ui.
