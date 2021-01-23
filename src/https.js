const https = require('https');
const { getUrlMetaData } = require('./utils');

const sendResponse = (options, data) => new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
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
                const body = res.headers["content-type"].match(new RegExp("application/json")) ? JSON.parse(string) : string;
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    resolve({ statusCode: res.statusCode, body });
                } else {
                    reject({ statusCode: res.statusCode, body });
                }
            } catch (err) {
                reject({ statusCode: 500, body: err });
            }
        });
    });

    req.on("error", (error) => {
        reject({ statusCode: 500, body: error });
    });

    if (data) {
        req.write(data);
    }

    req.end();
});

module.exports = {
    get: (url, options) => sendResponse({ ...getUrlMetaData(url), method: 'GET', ...options }),
    post: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'POST', ...options }, data),
    patch: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'PATCH', ...options }, data),
    put: (url, data, options) => sendResponse({ ...getUrlMetaData(url), method: 'PUT', ...options }, data),
    delete: (url, options) => sendResponse({ ...getUrlMetaData(url), method: 'DELETE', ...options }),
}