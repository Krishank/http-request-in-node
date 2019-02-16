const https = require("https");
const url = "https://jsonplaceholder.typicode.com/posts/1";
https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
    });
});

// PROS:
// native API, there is no need to install third party modules
// the response is a stream*

// CONS:
// a bit verbose
// the response is a stream*
// no support for promises


// https.get expects an url as a first argument and a callback as a second argument.
// The returned response is an http.ClientRequest object. That means, in order to manipulate the 
// body of the response you have to listen for events: notice the res.on() in the above example.
