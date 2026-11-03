# Portfolio de Samuel Lefèvre

Site personnel construit avec Nuxt 4. L'accueil présente l'expertise, l'approche d'architecture et les coordonnées professionnelles.

```bash
pnpm install
pnpm dev
```

Vérification locale : `pnpm lint`, `pnpm typecheck`, `pnpm build`.

## Environnement Amp Orb

`.agents/setup` utilise Node.js et Corepack fournis par l'orb pour installer
les dépendances avec la version de pnpm déclarée dans `package.json` et le
lockfile figé. Le script `postinstall` prépare aussi les types Nuxt.
Amp conserve cet environnement dans un snapshot réutilisable par les nouveaux
orbs ; si le snapshot doit être actualisé, pnpm réutilise les dépendances en cache.

`.agents/resume` ne réinstalle rien au réveil : ce projet ne nécessite ni service
de données ni authentification pour le développement. Pour démarrer le site et
l'exposer depuis l'orb avec un service supervisé :

```bash
amp orb service start portfolio --command 'pnpm dev --host 0.0.0.0 --port 3000' --portal
```
