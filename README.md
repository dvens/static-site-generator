# Front-end setup
This setup is used to create static html pages, based on Twig templates and data.json. 

This setup is using BEM & Atomic design: [Go to the architecture.](https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving) 

## Component classes
The component classes now look like this:

* Atom: a-button
* Atom modifier: a-button--primary
* Molecule: m-menu
* Molecule element: m-menu__link
* Organism: o-header
* Organism element: o-header__logo
* JS classes: js-header

## Usage 
Make sure Node installed.

#### Install Dependencies
```bash
npm install
```

#### Run development task:
This task runs a server and builds the project

```bash
npm start
```
Aliases: `npm run gulp`, `npm run development`

#### Run production task:
This task builds a project for production

```bash
npm run production
```
Aliases: `npm run gulp`, `npm run development`

## Config
The `gulpfile.babel.js` contains the tasks and defines a couple of configurations. All the other configuration are found in `config.js`.

This setup is using Twig JS (based on Twig PHP). They both share the same documentation: [Go to the Twig documentation.](http://twig.sensiolabs.org/documentation)

## Folder structure
	Frontend-setup
	│
	│   # Readme and npm packages
	├───README.md
	├───package.json
	├───Gulpfile.babel.js
	├───.babelrc
	├───TODO.md
	│
	├───assets
	│   │
	│   ├───fonts
	│   │   │
	│   │   │   # fonts
	│   │   ├───open-sans.woff
	│   │
	│   ├───images
	│   │   │
	│   │   │   # images
	│   │   ├───header-image.jpg
	│   │
	│   ├───svg
	│       │
	│       │   # svg icons, logos etc
	│       ├───logo.svg
	│   
	├───data
	│   │
	│   ├───pages
	│   │   │   
	│   │   │   # page data
	│   │   └───home.json
	│   │
	│   ├───site.json
	│
	├───components
	│   │
	│   ├───_styleguide
	│   │   │   
	│   │   │   # styleguide templates
	│   │	└───block-buttons.html
	│   │
	│   ├───atoms
	│   │   │
	│   │   │   # Atoms
	│   │   └───button.html
	│   │       
	│   ├───molecules
	│   │   │
	│   │   │   # Molecules
	│   │   └───menu.html
	│   │       
	│   ├───organisms
	│   │   │
	│   │   │   # Organisms
	│   │   └───header.html
	│   │       
	│   └───templates
	│       │
	│       │   # Templates
	│   	└───home.html
	│   
	├───javascript
	│   │
	│   ├───utils
	│   │   │
	│   │   │   # Utilities folder
	│   │	└───initializer.js
	│   │
	│   ├───atoms
	│   │   │
	│   │   │   # Atoms
	│   │   └───button.js
	│   │       
	│   ├───molecules
	│   │   │
	│   │   │   # Molecules
	│   │   └───menu.js
	│   │       
	│   ├───organisms
	│   │   │
	│   │   │   # Organisms
	│   │   └───header.js
	│   │
	│   │   # Initiliaze elements (CommonJS or ES6) 
	│   └───main.js
	│   
	├───sass  
	│   │
	│   ├───_styleguide
	│   │   │
	│   │   │   # Styleguide styling
	│   │   └───_block.scss
	│   │
	│   ├───helpers
	│   │   │
	│   │   ├───grid
	│   │   │	│
	│   │   │	└───grid-container.scss
	│   │   │
	│   │   │   # Mixins folder
	│   │   ├───mixins
	│   │   │	│
	│   │   │	└───triangle.scss
	│   │   │
	│   │   │   # Font, grid, color etc.. variables folder
	│   │   ├───vars
	│   │   │	│
	│   │   │	├───colors.scss
	│   │   │	├───typography.scss
	│   │   │	├───transitions.scss
	│   │   │	└───grid.scss
	│   │   │				
	│   │   │   # Import helpers, mixins, vars etc..
	│   │	└───index.scss
	│   │
	│   ├───atoms
	│   │   │
	│   │   │   # Atoms scss folder
	│   │	└───button.scss
	│   │
	│   ├───molecules
	│   │   │
	│   │   │   # Molecules scss folder
	│   │	└───menu.scss
	│   │
	│   ├───organisms
	│   │   │
	│   │   │   # Organisms scss folder
	│   │	└───header.scss
	│   │
	│   ├───templates
	│   │   │
	│   │   │   # Templates styling
	│   │	└───home.html
	│   │
	│   ├───base
	│   │   │
	│   │   │   # Layout styling
	│   │	├───normalize.scss
	│   │	├───font-face.scss
	│   │	└───html.scss
	│   │
	│   │   # Import molecules, atoms, mocules, layout etc...
	│   ├───main.scss		