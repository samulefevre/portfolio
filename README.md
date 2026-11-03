# Samuel Lefèvre's Portfolio

Personal website built with Nuxt 5 nightly. The homepage presents professional expertise, an architectural approach, and contact information.

Nuxt is pinned to `nuxt-nightly@5.0.0-2611030021-146df55` for reproducible
installs, rather than following the moving `5x` tag. This is a development
release using Nitro 3, not a stable Nuxt release. Upgrade the pin deliberately
and run `pnpm check` and `pnpm build` before adopting a newer nightly.

Requires Node.js **26.13.0** (pinned in `.nvmrc` and `package.json`).

```bash
nvm use
pnpm install
pnpm dev
```

Local checks: `pnpm lint`, `pnpm typecheck`, `pnpm build`.

`pnpm check` runs the complementary Vite+ check, then the existing Nuxt ESLint
and Vue type checks. `pnpm check:vite-plus` runs only Vite+ (Oxlint and native
TypeScript checks); it is not a replacement for `pnpm lint` or `pnpm typecheck`.
In validation, Vite+ caught a type error in a `.ts` file but missed type errors
in a Vue script and template and a missing `v-for` key. ESLint and `vue-tsc`
caught those Vue errors, so both remain required.

`vite.config.ts` configures only these additional checks. Nuxt still owns
development and production builds through `nuxt.config.ts`. Formatting is
disabled in `vp check` to preserve the existing ESLint stylistic rules without
reformatting the project. Use the package scripts above, not `vp dev` or
`vp build`, for this Nuxt app.

TypeScript 7 is installed as `@typescript/native` and provides the `tsc` executable.
The `typescript` dependency aliases `@typescript/typescript6` to provide the
TypeScript 6 API required by ESLint and `vue-tsc`. The `pnpm typecheck` command
therefore checks Vue components using TypeScript 6, while `pnpm exec tsc --version`
reports the native TypeScript 7 compiler version. This follows the official
[side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).

## Amp Orb Environment

`.agents/setup` installs the Node.js version pinned in `.nvmrc` when needed,
then uses Corepack to install dependencies
with the pnpm version declared in `package.json` and a frozen lockfile.
The `postinstall` script also prepares Nuxt types.
Amp saves this environment in a snapshot that new orbs can reuse;
when the snapshot needs updating, pnpm reuses cached dependencies.

`.agents/resume` does not reinstall anything on wake: this project requires
no backing services or authentication for development. To start the site
and expose it from the orb as a supervised service:

```bash
amp orb service start portfolio --command 'pnpm dev --host 0.0.0.0 --port 3000' --portal
```
