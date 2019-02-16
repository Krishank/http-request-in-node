const request = require("request");
const url = "https://jsonplaceholder.typicode.com/posts/1";
request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(body);
});

// PROS:
// ease of use

// CONS:
// no support for promises
// too many dependencies

// The request module does not support promises. It could be promisified with util.promisify or even better you could use request-promise,
// a request version which returns promises (and has less dependencies).