# Getting Started with Create React App

For this tutorial we will be using the Git List API from GET /users/{username}/repos for the provided username.

Basically we will fetch the data from our API endpoint https://api.github.com/users/{username}/repos and display the data in a user readable form.

Then we'll provide a way for users to easily search for specific repo by their names.‌‌

We'll use create-react-app to set up our project because it offers a modern build setup with no configuration at all.‌‌

To set up React, launch your terminal (either the one provided by your operating system or you can use an editor like VS Code) and run the following commands:

## `npx create-react-app my-app`

## `cd my-app`

## `npm start`

## How to Fetch the Data from Our API Endpoint Using Axios.

Now that we have successfully setup our React project, it is time to fetch the data from our API. There are many ways to fetch data in React, but the two most popular are Axios (a promise-based HTTP client) and the Fetch API (a browser in-built web API).‌‌

Axios is an HTTP client library that allows you to make requests to a given endpoint.

If you have an existing React project, you just need to install Axios with npm (or any other package manager):

## `npm install axios`

This fetches data from our endpoint and then uses setState to update our component when it gets the data.

## Installation

Clone this repository onto your local machine and then install all dependencies using the NPM package manager by running this command in your CLI from the repo root directory:

`npm install`

After all dependencies have been installed you can run the app locally in development mode or you can built out the static assets to deploy them on any webserver.

## Run the app in development mode

After installing all dependencies you can run the app on the webpack dev server by running the following command:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build a deployment-ready production build

Run this command to build out all of the static assets required for a production deployment:

`npm run build`

See [this official documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.
