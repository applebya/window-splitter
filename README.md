# Window Splitter

A demo showing how React Hooks can be leveraged to create a draggable window splitter, like below:

![WindowSplitter](https://camo.githubusercontent.com/a0bf0d97ed76c5900458214b024ffe015a23c86f/68747470733a2f2f676973742e6769746875622e636f6d2f6f6c697669657274617373696e6172692f33386535303036366466383839346137633465306234366233396234326362382f7261772f6368726f6d652d6465762d746f6f6c732e676966)

### Thoughts on future improvements

##### Horizontal Orientation

Unsure whether the device orientation would have an impact here, since my solution based on percentages. Resizing the browser window (or rotating your smartphone/tablet) would still preserve the proportion of each frame to one another.

##### Multiple Panes

This would certainly add complexity to the application state, since there would be 2+ dividers to move around. Instead of representing the width percentage as a number, it'd become an array of percentages - the length being equal to the # of dividers. It'd also need to handle the case of adding & removing frames on-demand.

##### How to make the component style engine independent?

There aren't many styles within the Frame components, so those could easily be moved into a CSS file and imported (rather than using styled-components). The `<FrameContainer />` and `<FrameInner />` components would certainly keep their `className?: string` prop, so the end-user could still use their own CSS-in-JS solution. The unique classNames I added for each component (ex: `"WindowSplitter-FrameContainer"`) would be suitable for any other styling solution.

##### Touch Screens Support

The `touchstart` and `touchend` events would also need to be listened for and handled. I haven't come across a case to handle this (often going for a react library for dragging), but it'd be super interesting to learn more about.

##### Nested Window Splitters

I haven't tried it, but nested window splitters should technically work with the current implementation. If I hadn't set this up as composeable components, but rather made it a black-box component with props accepting components, then there might've been some roadblocks.

# Run the App!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
