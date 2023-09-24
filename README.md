# Portfolio 

[View my Portfolio](https://sjohns2020.github.io/portfolio)

Deploy on Gh-pages

```sh 
    npm install gh-pages --save-dev
```

Update package.json

1. Add a Home Page
In the first section of the package.json file, add a homepage. This will match the homepage that GitHub pages will generate for you in the pattern `https://<username>.github.io/<repo-name>`:

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

2. Add Predeploy
In the scripts section, add a predeploy:

```json
"predeploy": "npm run build"
```

3. Add Deploy
Also in the scripts section, add a deploy, like so:

```json
"deploy": "gh-pages -d build"
```

```sh
    # add commit + push
    # npm run deploy after each change
    npm run deploy
```