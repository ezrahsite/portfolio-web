# Portfolio Web - DevWeb MTL

Portfolio professionnel pour développeur web freelance à Montréal.

## 📋 Structure des fichiers

```
portfolio-web/
├── app/
│   ├── layout.jsx          (renomme de app_layout.jsx)
│   ├── page.jsx            (renomme de app_page.jsx)
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js          (optionnel)
└── .gitignore
```

## 🚀 Installation rapide (Vercel)

### 1️⃣ Préparer les fichiers

1. **Crée un dossier** `portfolio-web` sur ton ordi
2. **Renomme les fichiers** :
   - `app_layout.jsx` → `layout.jsx`
   - `app_page.jsx` → `page.jsx`
3. **Mets-les dans un dossier** `app/`

Structure finale:
```
portfolio-web/
  ├── app/
  │   ├── layout.jsx
  │   ├── page.jsx
  │   └── globals.css
  ├── package.json
  ├── tailwind.config.js
  ├── postcss.config.js
  └── .gitignore
```

### 2️⃣ Créer un GitHub repo

1. Va sur [github.com](https://github.com)
2. Crée un nouveau repo: `portfolio-web`
3. Copie les commandes qu'ils te donnent et fais:

```bash
cd portfolio-web
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TONUSERNAME/portfolio-web.git
git push -u origin main
```

### 3️⃣ Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Sign up avec GitHub
3. Clique "Add New Project"
4. Sélectionne `portfolio-web`
5. Clique "Deploy"

**BOOM! 🎉 Ton site est live!**

## ✏️ Personnalisation

### Changer le nom et l'email

Ouvre `app/page.jsx` et cherche:

```javascript
// Ligne ~16 - Change ça:
<div className="text-xl font-bold text-blue-600">DevWeb MTL</div>

// En ça:
<div className="text-xl font-bold text-blue-600">Ton Nom</div>
```

Et aussi:
```javascript
// Cherche "hello@devweb.com" et change en ton email
<a href="mailto:hello@devweb.com">hello@devweb.com</a>
```

### Changer les couleurs

Remplace `blue-600` par une autre couleur Tailwind:
- `red-600`, `green-600`, `purple-600`, `indigo-600`, etc.

## 📱 Fonctionnalités

- ✅ Responsive (mobile + desktop)
- ✅ Navigation fixe
- ✅ Formulaire de contact
- ✅ Services avec prix
- ✅ Exemples de projets
- ✅ Témoignages
- ✅ Fast & optimisé

## 🔗 Ajouter un domaine perso

1. Achète un domaine sur [Namecheap](https://www.namecheap.com) (~12 CAD/an)
2. Dans Vercel: Settings → Domains
3. Ajoute ton domaine
4. Suis les instructions DNS

## 💡 Prochaines étapes

1. Personnalise avec tes infos
2. Remplace les exemples par tes vrais projets
3. Teste sur mobile
4. Ajoute un domaine perso
5. Partage avec des clients potentiels!

## 🆘 Besoin d'aide?

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

---

Made with ❤️ for Montreal freelancers
