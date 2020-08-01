# node-express

A REST API implemented using Express  

## Quick Start

- Clone the repository
- `npm install`
- `npm start`
- Open the link http://localhost:8080

To change the PORT

- Use the environment value set in the `NODE_ENV` variable inside the `.env` file at the root
- Open the file `config/NODE_ENV.json` - eg. `config/development.json`
- Set the `port` inside the json file

To choose a custom license for your project use  
[License](https://spdx.org/licenses/)

<br />

You can also try to create this project from scratch, by following the steps below.  

## Express REST API from scratch

```node
npm init
npm install express
npm install typescript --save-dev
```

Add this json section into package.json

```json
"scripts": {
    "tsc": "tsc",
    "prebuild": "eslint --fix",
    "build": "tsc",
    "prestart": "npm run build",	
    "start": "npm run dev",
    "dev": "ts-node-dev --respawn --transpile-only ./app/app.ts",
    "prod": "tsc && node ./build/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Create the tsconfig.json file

```node
npm run tsc -- --init
// message TS6071: Successfully created a tsconfig.json file.
```

Required when importing express in the ts file (`import express from "express";`)
`npm install @types/express --save-dev`

Dependencies

```node
npm install eslint --save-dev
npm install ts-node-dev --save-dev
```

Packages for coloured console output

```node
npm install console-info --save-dev
npm install console-warn --save-dev
npm install console-error --save-dev
```

Create the tslint.json file

```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "trailing-comma": [ false ]
    },
    "rulesDirectory": []
}
```


Eslint requirements

```node
npm install @typescript-eslint/parser --save-dev
npm install @typescript-eslint/eslint-plugin@latest --save-dev
```

Initialize .eslintrc.json  
`node_modules\.bin\eslint --init`

Now modify the .eslintrc.json file by using the json below

```json
{
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    }
}
```

Start the application  
`npm start`
