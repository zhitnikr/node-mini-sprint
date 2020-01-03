# Node Mini Sprint

This repo contains a client directory and a server directory. While it is all in one repo, they must be run separately and you should consider them to be 2 separate applications.

Open 2 terminal windows.

* In one terminal window open the client directory and run live-server. This is serving your client files.
* In the other terminal window open the server directory and do the following:
  - `npm install`
  - `npm start` or `nodemon`

  The client will communicate with your server via jQuery's AJAX.

  Your server will listen for and respond to client requests. You are building an API similar to ones that you have used in the past. For this project you will be using Node (no Express allowed). In future projects you will use Express.

  ## Focus on understanding the following:
  What is the difference between the client and the server?
  What is the request/response cycle?
  What is CORS and how do you prevent CORS errors?
  What are http verbs? When are they used?
  What are http status codes and how do you respond with them?
  What is an endpoint and where do you see it?
  What tools can you use to test your server?
  Where do you see your server console.logs?
