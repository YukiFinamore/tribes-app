# Tribes App (Test)

The purpose of project is show the experience with Front-End technics and some respective tools.

## Installing

Clone the project on your directory with this command line:

```
git clone git@github.com:YukiFinamore/tribes-app.git
```

By default we are using [JSON Server](https://github.com/typicode/json-server) to simulate a fake api. You can access the `operation` config on `src/operation/api.js`. Fake infos can be configured on `db.json` on the root of project.

## Starting with React

This project works with:
* Node v10.15.3 - [installation guide](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

After make sure this prerequisites are installed and configured, inside the directory project, run on your terminal:

```
npm install
```

If you got success message, run:

```
npm start
```

If you got a message calling to run the project on another port because `localhost:3000` is already running, just run `Yes` on your terminal.

## Starting JSON Server

To run your fake api using JSON Server open another tab in your terminal inside your application folder and run this command line:

```
json-server --watch db.json --port 3004
```

## Some used tools
* Duck Patterns - [more infos](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)
* Styled Components - [more infos](https://styled-components.com/docs/basics)
* Redux - [more infos](https://redux.js.org/basics/usage-with-react)
* Redux Saga - [more infos](https://redux-saga.js.org/)

## Getting Started

With the project running, access on your browser [localhost](http:localhost:3000) (Default localhost)
On your root path (first screen), you can Login on your fake account. You'll be redirect to Profile page and your fake user infos will be saved and showed on this screen via Redux. The Profile page have a fake topic list where if you click in some topic you'll be redirect to Feed page. On this page we'll collect and show all topic posts according fake api, also via Redux.

That's all :)

## Authors

* **Yuki Finamore** - [github](https://github.com/YukiFinamore)
