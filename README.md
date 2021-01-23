<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,200&display=swap" rel="stylesheet">

<div style="display: flex; flex-direction: column; align-items: center; width: 100%">
    <img src="https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg" style="width: 100%; margin: 1.5rem;">
    <h1 style="text-align: center;">Node: Fast HTTP Request</h1>
    <h2>Promise based HTTP request library for Node.js. Faster than Axios.</h2>
</div>

### Installation

`npm install -S fast-http-request`

### Methods

#### Parameters:

- Url: string
- Body: Must be string. Use `JSON.stringify` for any objects used.
- Options: Must be an object. [Check Node.js request options](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_request_options_callback)

#### Examples

- GET:

```
const request = require("http-fast-request");

async function () {
    try {
        const response = await request.get(url = "", options = {});
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
        const response = await request.post(url = "", body = "{}", options = {});
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
        const response = await request.patch(url = "", body = "{}", options = {});
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
        const response = await request.put(url = "", body = "{}", options = {});
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
        const response = await request.delete(url = "", options = {});
        // Response: { headers: {}, body: {}, statusCode: number }
        return response.body;
    } catch (error) {
        // Error Response: { headers: {}, body: {}, statusCode: number }
        return error;
    }
}
```
