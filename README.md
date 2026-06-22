# Michael Dever & Associates — Site vitrine

Site statique en 3 langues (EN, FR, DE) construit avec Astro + Tailwind v4.

## Modifier le contenu (cas le plus courant)

Tout le texte du site vit dans 3 fichiers JSON :

```
src/locales/en.json   ← anglais (langue par défaut, /)
src/locales/fr.json   ← français (/fr/)
src/locales/de.json   ← allemand (/de/)
```

Les 3 fichiers ont **exactement la même structure de clés**. Pour changer un texte, on modifie la valeur dans chacun des 3 fichiers, on commit, on push → Vercel redéploie automatiquement en ~30 secondes.

Exemple : pour changer le numéro de mobile, chercher `+41 76 394 06 30` dans `src/components/Page.astro` (les numéros / l'email / le lien LinkedIn sont dans le composant, pas dans les JSON, car ils sont identiques dans toutes les langues).

### Sections de la page

Dans l'ordre, chaque JSON contient : `hero` (accroche + titre + 3 paragraphes d'intro), `work` (« Notre activité »), `ai` (« Intelligence artificielle et confidentialité »), `clients` (« Notre clientèle »), `about` (« Qui sommes-nous ? ») et `contact`.

## Développement local

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # build statique dans dist/
npm run preview      # preview du build
```

## Déploiement sur Vercel

1. Pousser ce repo sur GitHub.
2. Sur Vercel : **Add New → Project → Import** ce repo.
3. Vercel détecte Astro tout seul. Laisser les valeurs par défaut :
   - Framework Preset : Astro
   - Build Command : `npm run build`
   - Output Directory : `dist`
4. **Deploy**.

Plan gratuit (Hobby) : largement suffisant pour ce site (100 GB de bande passante / mois inclus).

### Domaine personnalisé

Une fois déployé, dans Vercel → Settings → Domains, ajouter `michael-dever.com` (ou le domaine choisi) et suivre les instructions DNS.

Ensuite, vérifier dans `astro.config.mjs` :

```js
site: "https://michael-dever.com",
```

…et redéployer (pour que les URLs canoniques et hreflang soient correctes).

## Notes importantes

- **Les traductions FR/DE sont à relire par Michael** avant la mise en ligne — c'est lui le pro, pas le développeur. Deux passages manquaient dans le document allemand (le paragraphe « Clients » et la phrase sur le 20ᵉ anniversaire) et ont été traduits depuis l'anglais : à valider.
- Les routes générées sont `/` (EN), `/fr/`, `/de/`. EN n'a pas de préfixe (langue par défaut).
- Le sélecteur de langue est en haut à droite de toutes les pages.
- Toutes les pages partagent le même composant `src/components/Page.astro` — donc une modif de structure (ex. réordonner les sections) ne se fait qu'une seule fois.

## Structure du projet

```
src/
  locales/        ← contenu (JSON) ⭐ c'est ici que ça se passe
    en.json
    fr.json
    de.json
  pages/          ← une route par langue (chacune ~3 lignes)
    index.astro
    fr/index.astro
    de/index.astro
  components/
    Page.astro            ← structure de la page (sections)
    LanguageSwitcher.astro
  layouts/
    Layout.astro          ← <head>, fonts, hreflang
  styles/
    global.css            ← Tailwind + variables couleurs/fonts
  i18n.ts                 ← helper qui charge les JSON
astro.config.mjs          ← config i18n
```
