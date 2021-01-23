<div style="display: flex !important; flex-direction: column !important; align-items: center !important; width: 100%">
    <img src="https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg" style="width: 100% !important; margin: 1.5rem;">
    <h1 style="text-align: center !important;">Node: Fast HTTP Request</h1>
    <h2>Promise based HTTP request library for Node.js. Faster than Axios.</h2>
</div>

### Installation

`npm install -S fast-http-request`

### Methods

- GET:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.get(url, options);
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```


- POST:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.post(url, body, options);
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```


- PATCH:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.patch(url, body, options);
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```


- PUT:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.put(url, body, options);
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```


- DELETE:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.delete(url, options);
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```