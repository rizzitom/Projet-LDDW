# Collaboration

Notes

> Le "\$" est un symbole pour représenter une interface en ligne de commande. Ne pas copier le symbole dans la commande.

> Si il y a une étape manquante ou incompréhensible, me le signaler.

> Dans les blocs de code, les trois petits points "..." représentent du code divers (pour mettre en valeur ce qui est important)

## Environnement de développement

### Git et GitHub

Pour pouvoir récupérer et publier les changements effectués en local, il faut avoir [Git](https://git-scm.com/) d'installé. Une fois effectué, toutes les commandes Git sont accessibles. La liste des commandes Git en français est [ici](https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf).

Les commandes utiles pour notre projet sont:

- `git clone <dossier>` pour cloner un projet (nom de dossier optionnel)
- `git checkout` pour changer de branche

> À noter que même si toutes les commandes Git sont réalisables dans VSCode avec la touche F1 (taper git -commande- pour afficher la liste), il est quand même préférable d'installer Git en cas de besoin.

> Lors de la première utilisation, GitHub peut vous demander des informations de connexion comme votre login et votre mot de passe. Renseignez ces informations pour pouvoir publier vos changements plus tard.

### Extensions VSCode

Voici la liste des extensions VSCode pour Vue:

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) (pour avoir les astuces des fichiers `.vue`quand on code)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (pour avoir le listing des classes Tailwind, très pratique)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (un [linter](https://www.synbioz.com/blog/tech/un-code-js-impeccable-grace-a-eslint) JavaScript)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (pour indenter plusieurs types de fichiers)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) (pour indenter des fichiers en respectant la notation ESLint)

Les extensions ci-dessous sont en option:

- [Save Typing](https://marketplace.visualstudio.com/items?itemName=akhail.save-typing) (plus besoin de ctrl+s pour sauvegarder, c'est automatique)
- [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter) (pour indenter les fichiers `.css`)
- [Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview) (pour avoir un aperçu d'un fichier `.md` dans VSCode)

### Récupérer le projet en local

Pour récupérer le projet, il suffit de cloner le "repository" GitHub en local. Sur GitHub, copier l'URL qui va servir à cloner le projet:

![clone github project](https://i.ibb.co/5kDfyS3/clone.png)

#### Avec VSCode

Ouvez le dossier dans lequel vous souhaitez cloner le projet (`Fichier > Ouvrir un dossier`). Une fois le dossier ouvert, ouvrez le terminal intégré (`CTRL+J` sur Windows, `CMD+J` sur Mac). Tapez ensuite la commande Git pour cloner le projet:

```sh
$ git clone <url>
```

> Note: la commande clone va se charger de créer un dossier pour regrouper les fichiers du projet, inutile d'en créer un.

#### En ligne de commande

À l'aide du terminal VSCode (ou d'un autre terminal) se diriger vers le chemin ou l'on souhaite cloner le projet. Exemple:

```sh
$ cd /Applications/MAMP/htdocs/
```

Et ensuite éxécuter la commande `clone` mentionnée ci-dessus.

### Installation des dépendances

Lorsque vous récupérez un projet GitHub, vous ne pouvez pas encore lancer de serveur en local. Il faut installer tous les packages qui dépendent du code. Par défaut, le dossier `node_modules` est ignoré sur GitHub (puisqu'il est renseigné dans le fichier `.gitignore`).

La raison pour laquelle ce dossier est ignoré est qu'il contient souvent beaucoup trop de dépendances et est donc trop lourd pour être mis sur GitHub. De plus, les mis à jour des packages sont fréquentes donc il est inutile de stocker des packages obsolètes.

Pour récupérer les packages NodeJS, il faut installer...[NodeJS](https://nodejs.org/fr/) :scream:

Une fois installé, éxécuter la commande suivante **dans le dossier du projet** pour récupérer les dépendances:

```sh
$ npm install
```

> Pour vérifier que vous avez bien installé Node ou npm, vous pouvez éxécuter les commandes suivantes

```sh
# NodeJS
$ node -v

# npm
$ npm -v
```

> Il se peut que vous récupérerez une version des packages différentes et aurez un changement de détecté dans même avoir touché au code:
> ![](https://i.ibb.co/Rz0P5ZT/Screen-Shot-2021-07-14-at-5-36-17-PM.png)

Pas de panique, il suffira juste de commit ce fichier avec comme message "update dependencies".

## Structure du projet

La structure du projet ressemblera à ceci

![](https://i.ibb.co/4d6TNdg/Screen-Shot-2021-07-14-at-5-15-04-PM.png)

Je ne vais citer que les fichiers et dossiers les plus importants:

- [`components`](https://fr.nuxtjs.org/docs/2.x/directory-structure/components) - un dossier qui regroupe tous nos composants, il est organisé en plusieurs sous dossiers
- [`layouts`](https://fr.nuxtjs.org/docs/2.x/directory-structure/layouts) - un dossier qui regroupe des layouts (template pour éviter de ré-importer les composants un à un a chaque fois)
- [`pages`](https://fr.nuxtjs.org/docs/2.x/directory-structure/pages) - toutes les pages sont regroupées dans ce dossier, la structure d'URL est donc `localhost:3000/mapage(.vue)`
- [`static`](https://fr.nuxtjs.org/docs/2.x/directory-structure/static) - dossier qui contient des fichiers de type images, icones etc

## Créer une page

> Veuillez bien vérifier à être sur la bonne branche avant de faire un changement, si besoin utilisez `git checkout <branche>`

Rappel des branches utilisées ([lien GitHub](https://github.com/OrbixYy21/Projet-LDDW/branches/all)):

- master - la branche de production: à chaque changement effectué sur cette branche, un déploiement est fait sur le site
- panel - tout ce qui concerne le panel utilisateur pour la gestion de commmandes **ET** le compte admin
- landing - toutes les pages du site visible pour un utilisateur non connecté devraient être créées à partir de cette branche (sauf connexion/inscription)
- login - tout ce qui est relatif à la connexion et à l'inscription devrait être modifié sur cette branche

### Lancer le serveur local

Pour commencer à développer en local, il faut démarrer l'application Nuxt en mode développement. Éxécutez cette commande comme l'indique [la documentation Nuxt](https://fr.nuxtjs.org/docs/2.x/get-started/commands):

```sh
$ npm run dev
```

Sauf erreur de configuration, l'application devrait démarrer correctement.

![starting nuxt app](https://i.ibb.co/6FvY5Qr/Screen-Shot-2021-07-14-at-5-57-05-PM.png)

Une fois démarrée, deux liens sont à disposition par défaut:

- http://localhost:3000/ - Le site en mode développement
- http://localhost:3000/_tailwind - La documentation tailwind en local (sinon utiliser la documentation en ligne https://tailwindcss.com/docs)

### Créer une page

#### Création du fichier

Comme indiqué ci-dessus, le dossier qui nous intéresse pour créer une nouvelle page est `pages`. `Clic droit sur pages > Nouveau fichier` et insérez le nom que vous souhaitez dans l'URL (ex. contact.vue sera localhost:3000/contact)

Une fois ouvert, le fichier sera vierge. Insérez alors la boilerplate pour les fichiers Vue en tapant `vue`

![](https://i.ibb.co/HzWfYnj/Screen-Shot-2021-07-14-at-6-15-21-PM.png)

et appuyez sur entrée pour générer le bout de code

![](https://i.ibb.co/HPYrwr7/Screen-Shot-2021-07-14-at-6-15-31-PM.png)

Help, il y a une erreur et Nuxt refuse d'afficher le site en local :fearful:

C'est normal. Il s'agit du linter ESLint qui fait son travail qui est de s'assurer que les bonnes pratiques sont respectées. Dans notre cas, notre partie `template` est vide ce qui est une erreur Vue. Ensuite, nous n'avons pas inséré de ligne vierge en fin de fichier, qui est obligatoire selon ESLint (survoler la partie en rouge affichera le message d'erreur).

Si nous effectuons quelques petits changements, le problème est réglé très facilement.

![](https://i.ibb.co/HXVwP1B/Screen-Shot-2021-07-14-at-6-15-58-PM.png)

> Note: la partie `style` n'est pas requise dans notre projet la plupart du temps car nous utilisons TailwindCSS (qui s'utilise avec des classes)

> Au moins un élément racine est obligatoire dans un composant vue, la balise `<template>` n'est pas un élément valide et ne sera donc pas injecté dans le DOM.

Pour appliquer un layout (par défaut aucun), ajouter ce bout de code dans la partie `script` du composant:

```js
export default {
  layout: "MainLayout"
};
```

Le layout ajoutera automatiquement le header et le footer, et placera le contenu de la page dans un élément `<main>`.

Imaginons maintenant que nous avons un formulaire de contact dans notre componsant (page). Il y aura plusieurs choses à gérer dont:

- Les composants à intégrer (inputs, button etc)
- Les données à vérifier avant d'éxécuter véritablement l'envoi du message
- La vérification du bon fonctionnement de notre code

Sans oublier les potentielles erreurs provenant d'une mauvaise configuration ou de notre code.

Nous allons créer un formulaire ultra-simplifié pour montrer l'essentiel de chaque étape (du copié-collé peut être fait d'autre fichiers si la documentation et ce guide ne suffisent pas).

![](https://i.ibb.co/xzGNWy7/Screen-Shot-2021-07-14-at-6-48-00-PM.png)

Il se peut que l'import de composant génère une mauvaise syntaxe. Replacez le nom du composants dans l'objet `components` et ré-indentez votre document avec `ALT+SHIFT+F`

![](https://i.ibb.co/L8f4n4p/Screen-Shot-2021-07-14-at-6-48-17-PM.png)

> Note: une approche sémantique sera optimale pour le bon référencement du site.

#### Gestion des données et interactivité

Notre formulaire est créé, mais rien ne se produira si l'on clique sur "Envoyer". Nous allons créer une méthode qui va vérifier les données, puis éxécuter une autre fonction si toutes les vérifications ont été passées avec succès.

> Veuillez vous référer à la documentation Vue si vous avez un doute

Intégrez tout d'abord l'objet `data` avec `v-model` pour lier les inputs avec Vue.

```html
<template>
  <form>
    <label for="email">Votre email</label>
    <l-input id="email" v-model="email" type="email" />

    <label for="message">Votre message</label>
    <l-input id="message" v-model="message" maxlength="150" />

    <l-button>Envoyer</l-button>
  </form>
</template>

<script>
  ...
  export default {
    ...
    data () {
      return {
        email: '',
        message: ''
      }
    }
  }
</script>
```

Nos données sont maintenant dans notre modèle Vue mais ne sont pas traitées. Intégrez une méthode (fonction) qui permettra de vérifier les données à l'aide de **Vuelidate** (consulter la documentation en cas de doute).

```html
<template>
  <form @submit.prevent="checkCredentials">
    <p v-if="error" class="text-white bg-red-500 p-4 rounded-xl">
      {{ error }}
    </p>

    ...

    <l-button type="submit">
      Envoyer
    </l-button>
  </form>
</template>

<script>
  import {
    required,
    email,
    minLength,
    maxLength
  } from "vuelidate/lib/validators";
  ...

  export default {
    ...
    data() {
      return {
        ...
        error: ""
      };
    },

    validations: {
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(50),
        maxLength: maxLength(150)
      }
    },

    methods: {
      checkCredentials() {
        this.error = "";

        if (!this.$v.email.email || !this.$v.email.required) {
          this.error = "Entrez un email valide";
        } else if (
          !this.$v.message.required ||
          !this.$v.message.minLength ||
          !this.$v.message.maxLength
        ) {
          this.error = `Votre message doit contenir entre ${this.$v.message.$params.minLength.min} et ${this.$v.message.$params.maxLength.max} caractères`;
        } else {
          this.success();
        }
      },

      success() {
        alert("vérifications passées, envoi du message...");
      }
    }
  };
</script>
```

Oula, ça mérite quelques explications ça non ? :sweat_smile:

1. Le `@submit.prevent` est un déclencheur qui va nous permettre d'éxécuter une fonction quand on soumet le formulaire. Le `prevent` est là pour empêcher le navigateur d'aller sur une autre page (comportement par défaut, d'où le nom prevent)

2. Le paragraphe contient un attribut `v-if`. Il s'agit d'un rendu conditionnel qui n'affichera le paragraphe uniquement si la data `error` retourne une valeur non nulle (une autre valeur que "")

3. L'objet `validations` est spécifique à Vuelidate et voici son fonctionnement: une fois déclaré, chaque data qui doit être validée est insérée dans cet objet. Les conditions de validations doivent obligatoirement être importées et sont accessible via `$v.maData.maCondition`. Si la condition renvoie `false`, c'est qu'elle n'est pas respectée. Avec ce raisonnement, on peut comprendre plus facilement le code dans la méthode `checkCredentials`

![](https://i.ibb.co/BghsPXF/Screen-Shot-2021-07-14-at-7-16-27-PM.png)

Victoire, ça fonctionne :tada:

### Publier les changements

Vous avez terminé et testé l'intégration de votre fonctionnalité, mais tout ça reste encore en local. Pour effectuer vos changements sur Git, rendez-vous sur l'onglet "Source Control" qui est symbolisé par deux branches sur VSCode.

![](https://i.ibb.co/2qyt76Z/Screen-Shot-2021-07-14-at-7-27-52-PM.png)

Depuis cet onglet, vous pouvez voir toutes les lignes de votre fichier qui ont été modifiées.

Pour effectuer un changement sur un fichier, ajoutez ce fichier dans la liste des fichiers prêts à être envoyés à l'aide du bouton + (stage changes).

Ajoutez un message qui décrit le plus fidèlement possible ce que vous venez de réaliser (max. 50 caractères).

![](https://i.ibb.co/F3DNCXD/Screen-Shot-2021-07-14-at-7-36-57-PM.png)

Une fois fait, appuyez sur le bouton Commit en haut à gauche pour sauvegarder vos changements.

En bas à droite, vous aurez remarqué que deux flèches viennent d'apparaître à coté du nom de votre branche dans VSCode. Il s'agit du commit que vous venez d'effectuer.

Si vous avez réalisé un seul commit, vous aurez une flèche qui pointe vers le haut avec le chiffre 1 à coté qui signifie qu'il y a un changement à envoyer (push) qui est en attente. Cliquez sur le bouton pour envoyer votre changement et le rendre visible sur GitHub.

Félicitations, votre code est maintenant intégré au projet :confetti_ball:

# Liens utiles

- Documentation Vue.js - https://fr.vuejs.org/v2/guide/index.html
- Documentation Nuxt - https://fr.nuxtjs.org/docs/2.x/get-started/installation
- Documentation TailwindCSS - https://tailwindcss.com/docs
- Documentation Vuelidate - https://vuelidate.js.org/#sub-basic-usage
- Commandes Git en français - https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf
- GitHub pour les nuls - https://www.christopheducamp.com/2013/12/15/github-pour-nuls-partie-1/
- La liste complète des raccourcis VSCode pour gagner du temps (en anglais) - https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf **OU** un article équivalent en français - https://www.jesuisundev.com/gagne-du-temps-avec-visual-studio-code/
- Vue.js devtools pour inspecter les composants et avoir un aperçu des données en temps réel dans le navigateur - https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en
