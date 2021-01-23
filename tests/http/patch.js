const { should } = require("chai");
const http = require("../../src/http");


it("", async () => {
    const response = await http.patch("http://localhost:3000/json/", JSON.stringify({}), {});
})
