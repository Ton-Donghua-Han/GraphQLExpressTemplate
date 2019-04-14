[VS Code Main]: https://code.visualstudio.com/
[VS Code Download]: https://code.visualstudio.com/Download
[Node Download]: https://nodejs.org/en/download/
[GQL Main]: https://graphql.org/
[GQL Tutorial]: https://graphql.org/graphql-js/running-an-express-graphql-server/

[ESLint PI]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[GQL PI]: https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql
[JEST PI]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
[markdownlink PI]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[icon PI]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[comment PI]: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
[gitlens PI]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[markdownhelp PI]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one

# **GraphQL Express Project**

## Required Installation

You will need to install [Node & NPM][Node Download] and [VS Code][VS Code Download] to use this project, after installing both software, open this project folder using [VS Code][VS Code Main].

## Feature

- TypeScript - and it's built in pipeline
- ESLint - Auto fixing and real time error highlight with rules in javascript, import, promise, prettier and typescript
- GraphQL - Schema highlight
- GraphiQL - GraphQL api web server
- VS Code Debug Tool - Server and Unit Test
- Jest - Automatic Test Run, Failure Highlight, Individual Test Run, File Coverage Highlight
- Markdown - Readme file, syntax highlight and validation
- Git and npm package

## ToDo

- [ ] Add Development Section
- [ ] Add GraphiQL Server Section
- [ ] Add Local Service Test Section
- [ ] Add Unit Test Section
- [ ] Add Documentation Section
- [ ] Add Deployment Section
- [ ] Add Script Cheatsheet Section
- [ ] Add GraphQL Schema Validation Support
- [ ] Add Babel for production build Support

# Quick Setup

Here we provide a quick list of require plugins and it's setting. Check individual sections to see how each Plugin is used. See Recommonded Plugins for plugins that are nice to have.

`! Install all of the following plugin, you only have to do them once in VS Code. !`

## ESLint - [Official Plugin Page][ESLint PI]

`Feature: Real time linting, auto format on save, keep the code format consistent`

1. Put the following Setting into setting.json for VS COde to recognize typescript code and perform autofix on save

    ```js
    {
        "eslint.autoFixOnSave": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            { "language": "typescript", "autoFix": true },
            { "language": "typescriptreact", "autoFix": true }
        ],
    }
    ```

2. Disable Auto format on save in VS Code setting, so that code doesn't get formatted twice

    ```js
    {
        "editor.formatOnSave": false
    }
    ```

3. Disable Prettier plugin if you have it installed, as it may cause code to format twice

## Jest - [Official Plugin Page][JEST PI]

`Feature: Automatic Test Run, Failure Highlight, File Coverage Highlight`

- Turn Coverage Map On in VS Code Settings

    ```js
    {
        "jest.showCoverageOnLoad": true
    }
    ```

## GraphQL - [Official Plugin Page][GQL PI]

`Feature: .gql files (GraphQL schema) syntax highlight`

## markdownlint - [Official Plugin Page][markdownlink PI]

`Feature: Lint feature for .md documentation files`

# Recommonded Plugins

## vscode-icons - [Official Plugin Page][icon PI]

`Feature: Let's be honest, the default set of icons for all file sucks, we need better different icons for our files`

## Better Comments - [Official Plugin Page][comment PI]

`Feature: Highlight different type of comment used in this project`

## GitLens - [Official Plugin Page][gitlens PI]

`Feature: Perform Git Blame to find changes relates to commit`

## Markdown All in One - [Official Plugin Page][markdownhelp PI]

`Feature: Features that makes creating Markdown document easier`

# Dependencies

This section contains all related dev-ops tools as well as it's related setting files and npm packages. It should be used when someone want to update setting for specific tool or wants to add/remove dev-ops tools from this project.

## 1. Git Repository

```yaml
    setting-files:
        - .gitignore  # list of file ignored by git
```

## 2. NPM

```yaml
    setting-files:
        - package.json       # list of npm script to run and package dependencies
        - package-lock.json  # lock file for npm packages, read on npm for more detail
```

## 3. Typescript

```yaml
    setting-files:
        - tsconfig.json   # configure input, output dir, target module and linting rules
    npm-packages:
        - typescript
```

## 4. GraphQL server

```yaml
    plugin:
        GraphQL:                  # .gql syntax highlight
            setting-files:
                - .graphqlconfig  # required, not sure why
    npm-packages:
        - Express                 # http server run in javascript
        - express-graphql         # links express with graphql api
        - graphql                 # graphql library support
```

## 5. ESLint

```yaml
    setting-files:
        - .eslintrc.yaml                    # read the setting file for more detail
        - .prettierrc.js                    # prettier rule configuration
    plugin: ESLint
    npm-packages:
        - eslint
        - eslint-config-airbnb-base         # Airbnb recommonded javascript rules
        - eslint-plugin-import              # Recommonded Import Linting rules, confired by Airbnb-base
        - eslint-plugin-promise             # Recommonded Promise linting rules
        - eslint-plugin-prettier            # Runs prettier as tslint rules
        - prettier                          # Actual Prettier package
            setting-files: .prettierrc.js
        - eslint-config-prettier            # default prettier setting, disabling conflicting rules with other recommonded settings
        - @typescript-eslint/eslint-plugin  # Type script related linting rules
        - @typescript-eslint/parser         # Help parse typescript files
```

## 6. VS Code Debug

```yaml
    setting-files:
        .vscode/launch.json   # setting to execute npm run build and attaching vs code debugger
```

## 7. Jest

```yaml
    setting-files:
        jest.config.js      # jest test run configurations, see file for detail
    npm-packages:
        jest
        ts-jest             # typescript parser for jest
```