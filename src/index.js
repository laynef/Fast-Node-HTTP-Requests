const { https, http } = require("follow-redirects");


const getUrlMetaData = (url) => {
  const link = new URL(url);
  return {
    hostname: link.hostname,
    path: link.pathname + link.search,
    port: link.port,
    protocol: link.protocol,
  }
}

const request = (options, data) => {
  return new Promise((resolve, reject) => {
    options.maxRedirects = 20;

    const protocol = options.protocol;
    delete options.protocol;

    const req = (protocol.match(/s/) ? https : http).request(options, (res) => {
      // cumulate data
      const statusCode = res.statusCode;
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      // resolve on end
      res.on("end", () => {
        try {
          const string = Buffer.concat(chunks).toString();
          const body = res.headers["content-type"].match(new RegExp("application/json")) ? JSON.parse(string) : string;
    
          if (res.statusCode >= 200 && res.statusCode < 400) {
            resolve({ body, statusCode, headers: res.headers });
          } else {
            reject({ body, statusCode, headers: res.headers });
          }
        } catch (e) {
          reject({ statusCode, body: e, headers: res.headers });
        }
      });

      // reject on request error
      res.on("error", (err) => {
        reject({ statusCode: 500, body: err, headers: res.headers });
      });
    });

    // reject on request error
    req.on("error", (err) => {
      // This is not a "Second reject", just a different sort of failure
      reject({ statusCode: 500, body: err, headers: req.headers });
    });

    if (data) {
      req.write(data);
    }
    // IMPORTANT: End request
    req.end();
  });
};

module.exports = {
  get: (url, options) => 
    request({ ...getUrlMetaData(url), method: "GET", ...options }),

  post: (url, body, options) => 
    request({ ...getUrlMetaData(url), method: "POST", ...options }, body),
  
  put: (url, body, options) => 
    request({ ...getUrlMetaData(url), method: "PUT", ...options }, body),
  
  patch: (url, body, options) => 
    request({ ...getUrlMetaData(url), method: "PATCH", ...options }, body),

  delete: (url, options) => 
    request({ ...getUrlMetaData(url), method: "DELETE", ...options }),

  common: (...args) => request(...args),
};