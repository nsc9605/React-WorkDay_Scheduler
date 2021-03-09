# React-WorkDay_Scheduler

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This App has been refactored using React to replace the original jQuery used in the original app. This is a simple weekly calendar for the average work day 8-5pm. The time blocks change color for past, present, future depending on user's current time. This app allows a user to create, save, and delete a task if they choose.

:round_pushpin: [Click here to navigate to deployed React App!](https://nsc9605.github.io/React-WorkDay_Scheduler/) :round_pushpin:

## Table of Contents

- [Demonstration](#demonstration)
- [Installation](#installation)
- [License](#license)
- [Contribution](#contribution)
- [Technologies](#technologies)
- [Contact Information](#contact-information)

## Demonstration

### Header View
![Header Display Local Time](./src/img/header.png)

### Color Change Timeblocks
![Change In Color Depending On Time](./src/img/color-change.png)


### Directory Structure

```
├── node_modules
│
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
│
├── src
│   └── components
│       └── Tasks.js
│   └── img
│       └── color-change.png
│       └── header.png
│   └── styles
│       └── App.css
│       └── index.css
│       └── Tasks.css
│
│   └── App.js
│   └── hour.json
│   └── index.js
│
├── package-lock.json
├── package.json  
│
├── README.md
```

## Installation

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is licensed under the MIT License.

## Contribution

This project was creating with help from:

- Provided material from: BootCamp Spot class
- My tutor [Eric Wallen](https://github.com/ericwallen)
- Help from other students in the class in a private study group.


## Technologies

- [ReactJS](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Luxon](https://moment.github.io/luxon/docs/manual/install.html)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [Visual Studio Code](https://code.visualstudio.com/)
- Terminal / Git Bash

## Contact Information

- GitHub: [nsc9605](https://github.com/nsc9605)
- Portfolio: [Deploy Portfolio](https://nsc9605.github.io/Responsive-Portfolio/)
- Email: [Nicole Catapano](mailto:nsc9605@gmail.com)

