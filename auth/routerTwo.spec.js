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
    describe("POST /api/auth/register", () => {
      it("should return 201 created", async () => {
        const res = await request(server)
          .post("/api/auth/register")
          .send({ username: "testPost2", password: "testPost2" });
        expect(res.status).toBe(201);
      });
    });
  });
});
