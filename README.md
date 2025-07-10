# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```
bash
yarn
```

## Local Development

```
bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
bash
USE_SSH=true yarn deploy
```

Not using SSH:

```
bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Migration Steps
1. Project Initialization
2. Content Migration
Pages Directory Structure:

Convert pages folders to Docusaurus docs structure
Jekyll: dsop → Docusaurus: docs/dsop/
Jekyll: ajourhold → Docusaurus: docs/ajourhold/
Markdown Files:

Remove Jekyll front matter properties not needed in Docusaurus
Convert Jekyll-specific syntax to Docusaurus equivalents
Update internal links from .html to .md or use Docusaurus slug system
3. Navigation Migration
Sidebar Configuration:

Convert main_sidebar.yml to sidebars.js
Transform Jekyll's hierarchical structure to Docusaurus sidebar format
Map external URLs and internal links appropriately
4. Layout and Styling Migration
Layouts:

Jekyll _layouts → Docusaurus custom React components or themes
Convert default.html, page.html to Docusaurus page layouts
Migrate custom includes from _includes to React components
Styling:

Move CSS from css and assets to src/css/
Convert Jekyll/Liquid template styling to Docusaurus/React styling
Adapt Bootstrap components to Docusaurus theme
5. Configuration Migration
Site Configuration:

Convert _config.yml settings to docusaurus.config.js
Map site metadata, navigation, and plugins
Set up Google Analytics and other integrations
6. Data Files Migration
Data Structure:

Convert _data/*.yml files to JSON/JS modules in Docusaurus
Transform alerts, strings, tags to Docusaurus equivalents
Implement custom components for data-driven content
7. Search Migration
Search Implementation:

Replace Jekyll search with Docusaurus Algolia search
Or implement local search using Docusaurus plugins
Migrate search.json functionality
8. Assets and Images
Static Assets:

Move images, fonts, assets to Docusaurus static/ folder
Update all asset references in markdown files
Ensure proper path resolution
9. Custom Features
Jekyll-specific Features to Replace:

Includes (\{% include %\}) → React components
Liquid tags → MDX components or Docusaurus features
Data loops → Custom React components
Conditional content → MDX or React logic
10. Deployment Migration
Build and Deploy:

Replace Jekyll build process with Docusaurus build
Update CI/CD pipelines if any
Configure hosting (GitHub Pages, Netlify, etc.)
Key Conversion Tasks
Content Structure Mapping:
Navigation Structure:
Convert YAML sidebar to JavaScript object
Map Jekyll permalinks to Docusaurus slugs
Handle external URLs in navigation
Front Matter Conversion:
Would you like me to help you start with any specific part of this migration? I can:

Create the initial Docusaurus project structure
Convert specific sidebar configurations
Migrate sample content files
Set up the configuration files
Create conversion scripts for bulk content migration
