# InnMetric

Public website for [innmetric.com](https://innmetric.com). Static HTML on Netlify.

## Local

```bash
npm run lint:copy
npx --yes serve .
```

Routes: `/`, `/services/`, `/how-it-works/`, `/about/`, `/faq/`, `/privacy/`, `/terms/`, `/contact/`, `/thanks/`.

## Deploy

Linked to the existing Netlify site. From this folder:

```bash
.\deploy.ps1
```

`deploy.ps1` runs `npm run lint:copy` then `npx netlify deploy --prod --dir .`. Do not create a second Netlify site.

Git remote (Cursor Origin):

```text
https://origin.cursor.com/arifthei/innMetric.git
```
