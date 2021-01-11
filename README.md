## 24G Test Project

A video player application that runs in the browser—built with React, Node, JavaScript, and CSS.

## Project Status

This project is currently in development. Users can select and watch the video of their choice and the application will record the number of views, likes, and dislikes in local storage (though the data are not related to the videos collection at this time).

Additional functionality and styling is in progress. Please see bottom of README.

## Project Screen Shots

![24G test project](src/images/24g_screenshot_1.png?raw=true)



![24G test project](src/images/24g_screenshot_2.png?raw=true)

## Installation and Setup Instructions


You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Notes and Reflection  -- PLEASE READ(ME)

  - This was a learning experience and challenge for me. The app is not finished, but I'm having a good time working on it, so the work continues.
  - An express server was configured but never used, it is also lacking a schema, and the current local storage setup should be entirely scrapped and rebuilt using better practices.
  - I attempted to make the app pixel perfect before achieving base functionality/MVP, which cost me a considerable amount of time.
  - "To component, or not to component" that was a question I was repeatedly working through--building, dismantling, and building components over again. I also need to invest more time in learning how to better juggle state and props around a React application.

This test project presented a lot of unique puzzles that I had fun trying to solve even though I wasn't able to solve them all. I enjoyed working on this application more than any other project I've worked on thus far in my short coding career, and I'm itching to talk through it with someone at 24G.

I do have a small concern that sharing via Google Drive without 

In addition to React and Node, this project uses react-bootstrap for styling and react-player for managing video.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).