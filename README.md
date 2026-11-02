# Michael Dever & Associates — Site vitrine

Site statique construit avec Astro + Tailwind v4. La version anglaise est publiée sur `/`. Les versions française et allemande sont temporairement désactivées en attendant les nouvelles traductions.

## Modifier le contenu

Le contenu anglais se trouve dans `src/locales/en.json`. Les anciens fichiers `fr.json` et `de.json` sont conservés pour préparer les traductions, mais ne sont plus chargés ni publiés.

Les sections sont : accueil (`hero`), services (`work`), IA et confidentialité (`ai`), clients (`clients`), présentation (`about`) et contact (`contact`). Le titre d'accueil est présenté sur deux lignes, avec « Trust » en italique.

Les coordonnées communes se trouvent dans `src/site.ts`, utilisées à la fois par la page et les données de référencement. Seul le mobile est publié. Les localités de Genève et Charmey sont conservées.

## Développement et vérification

```bash
npm install
npm run dev          # http://localhost:4321
npx astro check
npm run build        # site statique dans dist/
npm run preview      # aperçu du résultat compilé
```

## Déploiement

Le dépôt contient une configuration Netlify (`netlify.toml`) : commande `npm run build`, dossier publié `dist`, Node 20. Le domaine canonique est `https://michael-dever.com`, défini dans `astro.config.mjs`.

Les règles Netlify redirigent temporairement `/fr`, `/fr/*`, `/de` et `/de/*` vers `/` avec un statut HTTP 302. Les pages Astro FR/DE génèrent aussi un repli HTML de redirection pour les hébergements statiques. Sur un autre hébergeur, configurer les mêmes redirections HTTP 302 dans ses propres règles.

Le sélecteur de langue est masqué. Le sitemap, les balises de langue et les données décrivant les versions du site ne déclarent que l'anglais. Les langues de travail de l'entreprise restent l'anglais, le français et l'allemand.

## Réactiver les traductions

1. Mettre à jour `src/locales/fr.json` et `src/locales/de.json` avec les traductions validées et la même structure que le contenu anglais.
2. Les réimporter dans `src/i18n.ts`, puis rétablir les langues, noms et codes Open Graph correspondants.
3. Remplacer les pages de redirection dans `src/pages/fr/index.astro` et `src/pages/de/index.astro` par le rendu de `Layout` et `Page` dans chaque langue.
4. Réactiver les langues et le sitemap multilingue dans `astro.config.mjs`, et retirer son filtre limité à `/`.
5. Réafficher `LanguageSwitcher` dans `Page.astro`, retirer les règles de redirection de l'hébergeur et mettre à jour `public/llms.txt`.
6. Vérifier puis reconstruire le site.

## Structure

```text
src/locales/             Textes anglais et traductions conservées
src/pages/               Page anglaise et redirections FR/DE
src/components/          Page et sélecteur de langue conservé
src/layouts/Layout.astro Métadonnées et données structurées
src/site.ts              Coordonnées et informations de l'entreprise
src/i18n.ts              Langues publiées et chargement du contenu
src/styles/global.css    Styles et titre d'accueil
public/llms.txt           Présentation destinée aux moteurs génératifs
```
