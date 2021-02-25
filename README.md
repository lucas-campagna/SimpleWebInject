# SimpleWebInject

A bootstrap to inject any javascript into websites.

# How to use

1. Edit the file `public/script.js` as you wish
2. Initialize the server via `npm start`
3. Open any site in the browser
4. Paste `fetch('http://localhost:3000').then(r=>eval(r.text()))` in the console to run your script in a local context
5. To run in global context type instead `eval( await fetch('http://localhost:3000').then(r=>r.text())` 
gits