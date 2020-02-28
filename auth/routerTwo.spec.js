const request = require("supertest");

const server = require("../api/server.js");

describe("auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("Post /api/auth/register", function() {
    it("should return content header", function() {
      return request(server)
        .post("/api/auth/register")
        .expect("Content-Type", /text\/html/);
    });
  });
});
