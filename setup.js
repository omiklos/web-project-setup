const {writeFileSync, mkdirSync} = require('fs');

function setup(path, project){
  mkdirSync(`${path}/${project}`, { recursive: true })
  mkdirSync(`${path}/${project}/java`, { recursive: true })
  mkdirSync(`${path}/${project}/backend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/public`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/src`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/css`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/html`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/src`, { recursive: true })
  

  writeFileSync(`${path}/${project}/README.md`, `
    java not included
    npm install
    `)
  writeFileSync(`${path}/${project}/package.json`, 
    `{
      "name": "empty",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "type": "module",
        "scripts": {
  "build:backend": "tsc -p backend",
  "build:frontend": "tsc -p backend/frontend",
  "build": "npm run build:backend && npm run build:frontend",
  "start": "nodemon backend/dist/app.js",
  "dev": "nodemon --watch backend/src --exec \"npm run build:backend && node backend/dist/app.js\""
       },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/node": "^25.0.3",
        "nodemon": "^3.1.11",
        "typescript": "^5.9.3"
      },
      "dependencies": {
            "dotenv": "^17.2.3",
            "express": "^5.2.1",
            "mongoose": "^9.0.2"
      }}  
    `)
  writeFileSync(`${path}/${project}/.gitignore`, `
    node_modules
    dist
    .env
    `)
  writeFileSync(`${path}/${project}/backend/src/app.ts`, ``)
  writeFileSync(`${path}/${project}/backend/tsconfig.json`, `
    // BACKEND
    {
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",

    "lib": ["ES2020"],
    "types": ["node"],

    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,

    "noEmitOnError": true,
    "removeComments": true
  },
  "include": ["src/**/*"]
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/tsconfig.json`, `
    // FRONTEND
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "target": "ES2020",
    "module": "ESNext",

    "lib": ["DOM", "ES2020"],

    "jsx": "react-jsx",

    "sourceMap": true,

    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "isolatedModules": true,
    "skipLibCheck": true,

    "noEmitOnError": true,
    "removeComments": true
  },
  "include": ["src/**/*"]
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/css/style.css`, `
    :root{}
body{
  background: #3b3b3f;
  margin: none;
  box-sizing: border-box
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/html/index.html`, `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../dist/index.js" defer></script>
</head>
<body>
    
</body>
</html>
    `)
  writeFileSync(`${path}/${project}/backend/frontend/src/index.ts`, ``)
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('loc: ', (loc) => {
  rl.question('name: ', (name) => {
    setup(loc.trim(), name.trim());
    rl.close();
  });
});




