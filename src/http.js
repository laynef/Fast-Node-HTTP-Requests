const http = require('http');
const { getUrlMetaData } = require('./utils');

const sendResponse = (options, data) => new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
        console.log(res)
        const chunks = [];

        res.on("data", (chunk) => {
            chunks.push(chunk);
        });

        res.on("error", (err) => {
            reject(err);
        });

        res.on("end", () => {
            try {
                const string = Buffer.concat(chunks).toString();
                const response = res.headers["content-type"].match(new RegExp("application/json")) ? JSON.parse(string) : string;
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    resolve(response);
                } else {
                    reject(response);
                }
            } catch (err) {
                reject(err);
            }
        });
    });

    req.on("error", (error) => {
        reject(error);
    });

    if (data) {
        req.write(data);
    }

    req.end();
});

module.exports = {
    get: (url, options) => sendResponse({ ...getUrlMetaData(url), method: 'GET', ...options }),
    post: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'POST', ...options }),
    patch: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'PATCH', ...options }),
    put: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'PUT', ...options }),
    delete: (url, options) => sendResponse({ ...getUrlMetaData(url), method: 'DELETE', ...options }),
}