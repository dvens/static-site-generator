'use strict'; 

/*
 * Imports
 * =======
 * Import gulp packages
 */
import path from 'path';

/*
 * Constant variables
 * ==================
 * Gulp tasks configuration
 */
const sourceRoot = path.join(__dirname, '../source');
const destRoot = path.join(__dirname, '../build');


/*
 * Config
 * ======
 * Gulp tasks configuration
 */
let config              = {};

config.cleanCss         = false;   
config.minifyJs         = false;
config.notifyError      = true;
config.minifyCss        = false;
config.minifyHtml       = false;
config.prettyHtml       = false;    
config.optimizeImages   = true;
config.optimizeSvg      = true;
config.sourcemaps       = false;


/*
 * Config source
 * =============
 * Source folders: assets, html, js, data, images and svg
 */
let source = config.source = {};

source.root = { 
    src : sourceRoot
};

source.assets = { 
    src: `${source.root.src}/assets`
};

source.html = { 
    src: `${source.root.src}/components`, 
    files: '*.html'
};

source.css = { 
    src: `${source.root.src}/sass`, 
    files: '*.scss'
};

source.js = { 
    src: `${source.root.src}/javascript`, 
    files: '*.js', 
    browserifyEntry: 'main.js'
};

source.data = { 
    src: `${source.root.src}/data`, 
    files: ['*.json', '**/*.json']
};

source.images = { 
    src: `${source.assets.src}/images`, 
    files: ['*.{png,jpeg,jpg,gif}', '**/*.{png,jpeg,jpg,gif}']
};

source.svg = { 
    src: `${source.assets.src}/svg`, 
    files: ['*.svg', '**/*.svg']
};

/*
 * Config destination
 * ==================
 * Destination/build folders: assets, html, js, data, images and svg
 */

let dest = config.dest = {};

dest.root = { 
    src : destRoot
};

dest.assets = { 
    src: `${dest.root.src}`
};

dest.html = { 
    src: `${dest.root.src}`
};

dest.css = { 
    src: `${dest.root.src}/css`
};          

dest.js = { 
    src: `${dest.root.src}/js`
};           

dest.data = { 
    src: `${dest.root.src}/data`
};

dest.images = { 
    src: `${dest.assets.src}/images`
};

dest.svg = { 
    src: `${dest.assets.src}/svg`
};

dest.styleguide = {
    src: `${dest.assets.src}/styleguide`
}

export default config;