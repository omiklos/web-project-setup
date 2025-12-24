const {writeFileSync, mkdirSync} = require('fs');

function setup(path, project){
  mkdirSync(`${path}/${project}`, { recursive: true })
  mkdirSync(`${path}/${project}/java`, { recursive: true })
  mkdirSync(`${path}/${project}/backend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/src`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/css`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/html`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/src`, { recursive: true })
  

  writeFileSync(`${path}/${project}/README.md`, `
    java not included
    git --version
    node -v
    npm -v
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
          "start": "nodemon backend/dist/app.js"
        },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/node": "^25.0.3",
        "nodemon": "^3.1.11",
        "typescript": "^5.9.3"
      }}  
    `)
  writeFileSync(`${path}/${project}/.gitignore`, `node_modules/`)
  writeFileSync(`${path}/${project}/backend/src/app.ts`, ``)
  writeFileSync(`${path}/${project}/backend/tsconfig.json`, `
    // BACKEND
    {
      // Visit https://aka.ms/tsconfig to read more about this file
      "compilerOptions": {
        // File Layout
        "rootDir": "./src",
        "outDir": "./dist",
    
        // Environment Settings
        // See also https://aka.ms/tsconfig/module
        "module": "nodenext",
        "moduleResolution": "NodeNext",
        "target": "es2020",
        "types": [],
        // For nodejs:
        // "lib": ["esnext"],
        // "types": ["node"],
        // and npm install -D @types/node
    
        // Other Outputs
        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,
    
        // Stricter Typechecking Options
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,
    
        // Style Options
        "noImplicitReturns": true,
        // "noImplicitOverride": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        // "noFallthroughCasesInSwitch": true,
        // "noPropertyAccessFromIndexSignature": true,
    
        // Recommended Options
        "strict": true,
        "jsx": "react-jsx",
        "verbatimModuleSyntax": true,
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true,
    
        "noEmitOnError": true,
        "removeComments": true,
        "noImplicitAny": true
      },
      "include": ["src/**/*"]
    }
    `)
  writeFileSync(`${path}/${project}/backend/frontend/tsconfig.json`, `
    // FRONTEND
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    "noImplicitReturns": true,
    // "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,

    "noEmitOnError": true,
    "removeComments": true,
    "noImplicitAny": true
  }
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
