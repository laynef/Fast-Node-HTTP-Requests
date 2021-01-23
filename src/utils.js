const getUrlMetaData = (link) => {
    const url = new URL(link);
    return {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
    }
};

module.exports = { getUrlMetaData };