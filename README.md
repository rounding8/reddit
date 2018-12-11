
# UpKeep Coding Test ∞ Raven N. Allan

> Given a ‘listing’ endpoint to the reddit API display a list of reddit listings with the thumbnail and title

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/reddit.git   # Clone Remote Repository
$ cd reddit/                                            # Change Directory to "reddit" of Local Repository
$ yarn                                                  # Install Application Dependencies via Yarn
$ yarn start                                            # Execute in "Development" mode
```

<br>

## Deployment

```
$ yarn build            # Generates Production *dist* distribution index.html, bundle.js, etc.
```

> App deployment can be handled using [CircleCI](https://circleci.com), [Jenkins](https://jenkins.io), [Grunt](https://gruntjs.com), etc.

<br>

## Structure

```
|- dist                 -- Webpack build of full-stack application
  |- index.html         // Single HTML Index File for Testing Progress SPA
  |- bundle.js          // Single webpack compiled source script of Application for Production
  |- ...                // Bundled assets to be included w/ dist (e.g. favicon.ico, custom font files, etc.)
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- public               -- Public assets
  |- html
    |- index.html       // Main HTML Source
  |- icon
    |- favicon.ico
|- src                  -- React Components
  |- components         // Generic reuseable component classes (header, menu, dropdown, listing, etc.)
    |- list
      |- index.jsx
  |- containers         // Main Section Parent Component Class Containers
    |- home
      |- index.jsx
  |- index.jsx          // Main webpack Entry
|- .gitignore           // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json         // Resource for installing & managing Application dependencies
|- README.md            // Project Documentation & Code Development Management Reference
|- webpack.config.js    // webpack Build Configuration
|- yarn.lock
```

<br>

### Dependencies

| Resource                                                               | npm                                                            | Description / Implementation                              |
|------------------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------|
| [Axios](https://github.com/axios/axios)                                | [axios](https://www.npmjs.com/package/axios)                   | Promise-based HTTP client                                 |
| [Polyfill](https://babeljs.io/docs/usage/polyfill)                     | [babel-polyfill](https://www.npmjs.com/package/babel-polyfill) | Dependency for Authentication oidc-client-js library      |
| [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) | [prop-types](https://www.npmjs.com/package/prop-types)         | Runtime type checking for React props and similar objects |
| [react](https://reactjs.org)                                           | [react](https://www.npmjs.com/package/react)                   | A JavaScript library for building user interfaces         |
| [ReactDOM](https://reactjs.org/docs/react-dom.html)                    | [react-dom](https://www.npmjs.com/package/react-dom)           | DOM-specific methods used at top level of application     |

<br>

> See additional [development dependencies](https://github.com/rounding8/reddit/blob/master/package.json#L32-L43)

<br>

## Changelog

| Version | Date     | Commit                                                                                         | Description |
|---------|----------|------------------------------------------------------------------------------------------------|-------------|
| 1.0.0   | 12-11-18 | [46f65dd](https://github.com/rounding8/reddit/commit/46f65ddd16aa9941dd9458b375ac93f8451dfe9e) | ✅  Initial app framework |
| 0.0.0   | 12-11-18 | [a10fe83](https://github.com/rounding8/reddit/commit/a10fe835298fa327f06d7305ee926fd809401847) | 🎉  Initial commit |

