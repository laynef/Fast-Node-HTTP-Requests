const { should } = require("chai");
const http = require("../../src/http");


it("", async () => {
    const response = await http.post("http://localhost:3000/json/", JSON.stringify({}), {});
})
