Offline-first web app with Hoodie & React
=========================================

Installation
------------
- clone the repository
- install the dependencies: `npm i`


Part 0: bootstrap
-----------------
Here we just installing dependencies:

- [Hoodie](http://docs.hood.ie/camp/) for client-side database and auth
- [React](https://facebook.github.io/react/) for declarative component-based
  views
- [Material-UI](http://www.material-ui.com/) for nice-looking material-design
  react components
- [Webpack](https://webpack.github.io/) for bundling of app modules
- [Babel](https://babeljs.io/) for modern js syntax

And creating:

- `public` folder - witch contains `index.html` and assets
- `src` folder - which contains app components
- `webpack.config.js` - webpack configuration file with dev settings

Workflow:

- Switch the repo to this part: `git checkout part0`
- Run dev server: `npm start`

Part 1: client-side database
----------------------------
In this part we learn how to add document to db and subscribe on db changes.
Russian article is avaliable at <https://habrahabr.ru/post/309166/>.
Do not forget to switch the repo: `git checkout part1`

Part 2: authorization
---------------------
We'll implement app-bar menus and dialogs for singning up and out
Russian article is avaliable at <https://habrahabr.ru/post/309572/>.
Do not forget to switch the repo: `git checkout part2`
