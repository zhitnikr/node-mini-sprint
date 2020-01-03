# Node Mini Sprint

This repo contains a client directory and a server directory. While it is all in one repo, they must be run separately and you should consider them to be 2 separate applications.

## Basic Setup

Open 2 terminal windows.

* In one terminal window open the client directory and do the following:
  - run [live-server](https://www.npmjs.com/package/live-server). This is serving your client files. If you open your index.html from Finder (e.g. you are seeing `file:///` in the URL bar) you will run into CORS issues. Use live-server.
  - Your client will run, but it does not communicate with the server yet. You need to write the appropriate code.

* In the other terminal window open the server directory and do the following:
  - `npm install`
  - `npm start` or `nodemon`
  - Your server will run, but it will not respond to requests correctly until you write the appropriate code.

## Client/Server Communications
  The client will communicate with your server via jQuery's AJAX. For your convenience the jQuery script is in the index.html file already.

  Your server will listen for and respond to client requests. You are building an API similar to ones that you have used in the past. For this project you will be using Node (no Express allowed). In future projects you will use Express.

## Focus on understanding the following:
- What is the difference between the client and the server?
- What is the request/response cycle?
- What is CORS and how do you prevent CORS errors?
- What are http verbs? When are they used?
- What are http status codes and how do you respond with them?
- What is an endpoint and where do you see it?
- What tools can you use to test your server?
- Where do you see your server console.logs?
- **What parts of your code are asynchronous and how will you handle that?**
