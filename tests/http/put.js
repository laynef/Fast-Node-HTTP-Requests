const { should } = require("chai");
const http = require("../../src/http");

it("", async () => {
    const response = await http.put("http://localhost:3000/json/", JSON.stringify({}), {});
})
