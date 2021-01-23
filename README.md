<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/laynef/Fast-Node-HTTP-Requests">
    <img src="https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg" alt="Logo" width="500" height="200">
  </a>

  <h3 align="center">Node.js: Fast HTTP Request</h3>

  <p align="center">
    Promise based HTTP request library for Node.js. Faster than Axios.
    <br />
    <a href="https://github.com/laynef/Fast-Node-HTTP-Requests"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/laynef/Fast-Node-HTTP-Requests/issues">Report Bug</a>
    ·
    <a href="https://github.com/laynef/Fast-Node-HTTP-Requests/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I want to create a lightweight HTTP request so amazing that it'll be the first one pick -- I think it will.

Here's why:
* Lightweight Node.js HTTP request library
* Promise based requests with easy to use interface

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Follow Redirects](https://www.npmjs.com/package/follow-redirects)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/laynef/Fast-Node-HTTP-Requests.git
   ```
2. Install NPM packages
   ```sh
   npm install -S fast-http-request
   ```



<!-- USAGE EXAMPLES -->
## Usage


### Parameters:

- Url: string
- Body: Must be string. Use `JSON.stringify` for any objects used.
- Options: Must be an object. [Check Node.js request options](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_request_options_callback)

### Methods

- GET:

```
request.get(url: string, options = {})
```


- POST:

```
request.post(url: string, body: string, options = {});
```


- PATCH:

```
request.patch(url: string, body: string, options = {});
```


- PUT:

```
request.put(url: string, body: string, options = {});
```


- DELETE:

```
request.delete(url: string, options = {});
```

### Responses

- Succesful Returns
```
{ headers: {}, body: {}, statusCode: number }
```


- Error Returns
```
{ headers: {}, body: {}, statusCode: number }
```

### Examples

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

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/laynef/Fast-Node-HTTP-Requests/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - laynefaler@gmail.com

Project Link: [https://github.com/laynef/Fast-Node-HTTP-Requests](https://github.com/laynef/Fast-Node-HTTP-Requests)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Follow Redirects](https://github.com/laynef/Fast-Node-HTTP-Requests)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://linkedin.com/in/laynefaler
[contributors-shield]: https://img.shields.io/github/contributors/laynef/Fast-Node-HTTP-Requests.svg?style=for-the-badge
[contributors-url]: https://github.com/laynef/Fast-Node-HTTP-Requests/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/laynef/Fast-Node-HTTP-Requests.svg?style=for-the-badge
[forks-url]: https://github.com/laynef/Fast-Node-HTTP-Requests/network/members
[stars-shield]: https://img.shields.io/github/stars/laynef/Fast-Node-HTTP-Requests.svg?style=for-the-badge
[stars-url]: https://github.com/laynef/Fast-Node-HTTP-Requests/stargazers
[issues-shield]: https://img.shields.io/github/issues/laynef/Fast-Node-HTTP-Requests.svg?style=for-the-badge
[issues-url]: https://github.com/laynef/Fast-Node-HTTP-Requests/issues
[license-shield]: https://img.shields.io/github/license/laynef/Fast-Node-HTTP-Requests.svg?style=for-the-badge
[license-url]: https://github.com/laynef/Fast-Node-HTTP-Requests/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555