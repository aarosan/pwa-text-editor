# pwa-text-editor [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
A single-page text editor that meets the PWA criteria, and implements methods for getting and storing data to an IndexedDB database

## Table of Contents

- [Usage] (#usage)
- [Installation](#installation)
- [Screen Shots](#screen-shots)
- [Deployed Application](#deployed-application)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

<a id="usage"></a>

### Usage

#### User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

#### Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

<a id="installation"></a>

### Installation

Navigate to the Root Directory of the project

Run `npm run start`

Navigate to http://localhost:5000

<a id="screen-shots"></a>

### Screen Shots

![Screenshot](assets/pwa-text-editor.png)

<a id="deployed-application"></a>

### Deployed Application

https://just-another-text-editor-pj9n.onrender.com

<a id="license"></a>

### License

MIT License

<a id="credits"></a>

### Credits

Week-19 Class Examples

*Service Worker:*

[Chrome Docs](https://developer.chrome.com/docs/workbox/modules/workbox-strategies)

<a id="questions"></a>

### Questions

If you have any questions, you can find me at my GitHub: [aarosan](http://github.com/aarosan)











