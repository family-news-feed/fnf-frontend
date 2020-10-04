# Family New Feed Static
Static project website for Family News Feed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Clone this repository locally and then run `yarn install` or `npm install`. Once yarn or npm finishes, verify that you can run the website with `yarn start` or `npm run start`.

## Directory Structure

Make all new components a new CapitalCased folder inside of the `src/components/` directory. Add their CapitalCased `.tsx`, `.css`, and any other necessary files to the new folder.

## Branching Conventions

Create a new branch for each bug or feature being tackled in the format `feature/yourName/branchName` or `bug/yourName/branchName`. Once ready to push your code, create a new upstream with `git push --set-upstream origin bug/yourName/branchName`. Create a new Pull Request targeting the `develop` branch, assign a reviewer, and submit feedback promptly if it's requested.  

When merging into develop, delete the remote upstream. Create a new Pull request for `develop`->`main`, assign a reviewer, and perform any QA necessary for your changes.

## Testing

Add all new test files inside of the component's folder in the `src/components/` directory. All files are to be named `CapitalCasedComponentName.test.tsx`

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
