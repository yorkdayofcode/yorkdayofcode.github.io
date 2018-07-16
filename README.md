# yorkdayofcode.github.io
Portal



## Development setup

Install yarn
https://yarnpkg.com/en/docs/install

Run yarn to install the dependencies

```
yarn
```

###  Compiling

Javascript modules are in `src/Modules/` which compiles to `dist/app.js`

```
yarn dev
yarn production
```

### Live reloading

To deveop with live browser reloading you need to setup `yorkdevelopers.yorkdayofcode.test` to serve to your site (this is where browsersync proxies to). Then run: 

```
yarn watch
```
