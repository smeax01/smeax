# 🚀 Portfolio Smeax

Portfolio personnel moderne et responsive développé avec HTML, CSS (Tailwind) et JavaScript.

![Portfolio Preview](project-showcase.png)

## ✨ Fonctionnalités

- 🎨 **Design Moderne** : Interface sombre élégante avec effets glassmorphism
- 📱 **100% Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- 🌍 **Multilingue** : Support FR/EN avec système de traduction
- 🎯 **Navigation Intuitive** : Menu hamburger sur mobile, navbar fixe sur desktop
- 🌙 **Mode Sombre/Clair** : Changement de thème dynamique
- ⚡ **Performance** : Chargement rapide, animations fluides
- 🖼️ **Galerie Interactive** : Lightbox avec navigation entre images

## 📄 Pages

- **Home** (`index.html`) - Page d'accueil avec présentation et compétences
- **Gallery** (`gallery.html`) - Galerie de projets visuels avec lightbox
- **Projects** (`projects.html`) - Showcase détaillé des projets
- **Contact** (`contact.html`) - Formulaire de contact et informations

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **Tailwind CSS v4** - Styling moderne et responsive
- **JavaScript Vanilla** - Interactions et fonctionnalités
- **Lucide Icons** - Icônes SVG
- **Alpine.js** - Réactivité légère
- **GLightbox** - Galerie d'images

## 🚀 Installation

1. **Cloner le repository**

```bash
git clone https://github.com/smeax/portfolio.git
cd portfolio
```

2. **Ouvrir dans un navigateur**

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve

# Ou simplement ouvrir index.html
```

3. **Accéder au site**

```
http://localhost:8000
```

## 📁 Structure du Projet

```
portfolio/
├── index.html              # Page d'accueil
├── gallery.html            # Page galerie
├── projects.html           # Page projets
├── contact.html            # Page contact
├── locales.json            # Fichier de traductions
├── manifest.json           # PWA manifest
├── icon.png                # Icône du site
├── project-showcase.png    # Image projet phare
└── README.md               # Documentation
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans les variables Tailwind :

```css
@theme {
  --color-midnight: #020617;
  --color-midnight-light: #0f172a;
  --color-electric: #3b82f6;
}
```

### Traductions

Modifier le fichier `locales.json` pour ajouter/modifier les traductions :

```json
{
  "fr": {
    "nav_contact": "Contact",
    "hero_subtitle": "Développeur web..."
  },
  "en": {
    "nav_contact": "Contact",
    "hero_subtitle": "Web developer..."
  }
}
```

### Contenu

- **Compétences** : Modifier les cards dans `index.html` (section Skills)
- **Projets** : Ajouter des projets dans `projects.html`
- **Images** : Remplacer les URLs Unsplash par vos propres images

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🌍 Système de Langue

Le site supporte le français et l'anglais. Pour changer la langue :

- **Desktop** : Cliquer sur le sélecteur de langue (FR/EN)
- **Mobile** : Ouvrir le menu hamburger et sélectionner la langue

## 🎯 Fonctionnalités Clés

### Menu Mobile

- Bouton hamburger visible sur mobile
- Menu latéral avec toutes les pages
- Sélecteur de langue et thème intégrés

### Galerie

- Grille responsive (1/2/3 colonnes)
- Lightbox plein écran au clic
- Navigation prev/next entre images
- Support swipe sur mobile

### Formulaire Contact

- Validation HTML5
- Design moderne avec focus states
- Prêt pour intégration backend

## 🚀 Déploiement

### GitHub Pages

```bash
# Pousser sur GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Activer GitHub Pages dans Settings > Pages
```

### Netlify

```bash
# Drag & drop du dossier sur netlify.com
# Ou connecter le repo GitHub
```

### Vercel

```bash
vercel --prod
```

## 📝 TODO

- [ ] Implémenter l'envoi du formulaire de contact
- [ ] Ajouter Google Analytics
- [ ] Optimiser les images (WebP)
- [ ] Ajouter des animations d'entrée
- [ ] Créer un blog (optionnel)

## 📄 Licence

MIT License - Libre d'utilisation et de modification

## 👤 Auteur

**Smeax**

- Portfolio : [smeax.dev](https://smeax.dev)
- GitHub : [@smeax](https://github.com/smeax)
- Email : contact@smeax.dev

## 🙏 Remerciements

- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [Lucide Icons](https://lucide.dev) - Icônes
- [GLightbox](https://biati-digital.github.io/glightbox/) - Galerie d'images
- [Unsplash](https://unsplash.com) - Images de démonstration

---

⭐ **N'hésitez pas à mettre une étoile si ce projet vous plaît !**
