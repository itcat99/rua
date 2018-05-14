# Rua

the react components develops scaffold. `[DEMO-LEVEL]`
---

## before install
```bash
npm install -g yarn
```
## install & start

```bash
# don't use npm. THX
yarn

yarn new <module name>

yarn start <module name> -p [port]

# port default: 8080
# open and enter http://localhost:8080 in your browser.
```

## how to use

### create new module
```bash
yarn new <module name>
```

### start webpack dev server
```bash
yarn start <module name>
```
### build
```bash
# translate to es module
yarn build:es
# then build to [project_root_folder]/es folder

# translate to commonjs
yarn build:commonjs
# then bild to [project_root_folder]/commonjs folder

# webpack deploy
yarn build:webpack
# then bild to [project_root_folder]/dist folder

# build all
yarn build
# means: build:es && build:commonjs && build:webpack
```

### format js && scss
```bash
# js
yarn format:js

# css
yarn format:css

# all
yarn format
```

## TODOLIST

- [ ] join `flow`
- [ ] join `cssModule`
- [ ] Optimize build
- [ ] others...

## I WISH

The ultimate goal is to build the project according to the configuration file.