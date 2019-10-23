# node-babel-modern-boilerplate

A boilerplate for Node.js apps working with Babel, ESLint, Prettier, Config, Winston

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Yarn](https://yarnpkg.com/) installed.

```sh
$ git clone https://github.com/KOJI-SAS/node-babel-modern-boilerplate.git # or clone your own fork
$ cd node-babel-modern-boilerplate
$ cp .env.dist .end
$ yarn
$ yarn dev
```

## Running Production

```sh
$ yarn
$ yarn build # Transpile with Babel
$ yarn serve
```

## Running Lint

```sh
$ yarn lint
$ yarn lint:fix # Fix errors
```

## File Structure

```bash
├── src # Source
│   └── index.js # Main file
├── dist # Transpiled javascript
├── config # Config
├── logs # Winstone logs
└── .env # Environment Variables
```

## Documentation

For more information about used libraries, you can refer

- [Babel](https://babeljs.io/docs/en/)
- [ESLint](https://eslint.org/)
- [Config](https://github.com/lorenwest/node-config)
- [Winstone](https://github.com/winstonjs/winston)

## License

This project is under [MIT License](./LICENSE).
