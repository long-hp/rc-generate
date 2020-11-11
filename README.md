# rc-generate

React CLI to generate components ( Reactjs + React Native)

[![npm version](https://img.shields.io/npm/v/rc-generate.svg)](https://www.npmjs.com/package/rc-generate)

## Install

**npm**

```bash
npm install rc-generate --save-dev
```

**yarn**

```bash
yarn add wil-rn-instafeed --dev
```

## Use in project

**package.json**

```js
{
  "scripts": {
    "rc-generate": "rc-generate"
  },
  "rc-generate": {
    "appDir": "src",
    "typescript": true,
    "reactNative": false
  },
}
```

**cli:**

```bash
npm run rc-generate --style scss --redux saga --component:name components/Button --component:type class
```

**or:**

```bash
yarn rc-generate --style scss --redux saga --component:name components/Button --component:type class
```

**or npm global**

```bash
npm install rc-generate -g
```

## Use with npx

```bash
npx rc-generate --appDir user/projectName/src --style scss --redux saga --component:name components/Button
```

## Use with npm global

```bash
rc-generate --appDir user/projectName/src --style scss --redux saga --component:name components/Button
```

## Options

| Option                  | Type                                | Default | Description |
| :---------            | :-------:          | :-----: | :----------- |
| -p, --path   | `string`  | -       | Generate a path  |
| -c:type, --component:type   | `function | class`   | `[]`       | Generate a component type ( example: Button or components/Button) |
| -c:name, --component:name   | `string`  | -       | Generate a component name  |
| -s, --style    | `css | scss`      | -       | Generate a style |
| -r, --redux    | `thunk | saga`      | -       | Generate a redux state management |
| -V, --version    | -      | -       | output the version number |
| -h, --help    | -      | -       | display help for command |

## License

MIT © [wiloke1](https://github.com/wiloke1)
