
# Multiple Ways of making http request

  

Node has multiple Native and custom options to make http request not we are going to cove few of them.

  

## Project Setup

  

```
git clone https://github.com/Krishank/http-request-in-node.git
cd http-request-in-node.git
Yarn install or npm install

node https-native.js
node node-fetch.js
node request-module.js
node axios-module.js
```

  
  
  

-  [Native HTTP](https://nodejs.org/api/http.html)

-  [Node Fetch](https://nodejs.org/api/http.html)

-  [Request](https://www.npmjs.com/package/request) and [Request Promise](https://www.npmjs.com/package/request-promise)

-  [Axios](https://www.npmjs.com/package/axios)

  
  

## Native Http

  

https.get expects an url as a first argument and a callback as a second argument.The returned response is an http.ClientRequest object. That means, in order to manipulate the body of the response you have to listen for events: notice the res.on() in the above example.

#### PROS:

- native API, there is no need to install third party modules
- the response is a stream*

  
#### CONS:

- a bit verbose
- the response is a stream*
- no support for promises


## Node Fetch

[**node-fetch**](https://www.npmjs.com/package/node-fetch) is an implementation of the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for Node.js. It’s basically the same as window.fetch so if you’re accustomed to use the original it won’t be difficult to pick the Node.js implementation.

**PROS**:
-  support for promises
-  same API as window.fetch
- few dependencies

**CONS**:
- same API as window.fetch

## Request
[request](https://www.npmjs.com/package/request) is one of the most popular NPM module for making HTTP requests with Node.js. It supports both HTTP and HTTPS and follows redirects by default.

**PROS**:

- ease of use

**CONS**:

- no support for promises
- too many dependencies

## Axios
[**Axios**](https://www.npmjs.com/package/axios)  is another super popular NPM module for making HTTP requests. It supports Promises by default.

Axios can be used both for the front-end and the back-end and one of its core feature is the ability to transform both the request and the response.

**PROS**:

1.  support for promises
2.  ease of use
3.  2 dependencies