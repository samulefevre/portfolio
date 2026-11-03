# Samuel Lefèvre's Portfolio

Personal website built with Nuxt 4. The homepage presents professional expertise, an architectural approach, and contact information.

```bash
pnpm install
pnpm dev
```

Local checks: `pnpm lint`, `pnpm typecheck`, `pnpm build`.

## Amp Orb Environment

`.agents/setup` uses the orb's Node.js and Corepack to install dependencies
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
