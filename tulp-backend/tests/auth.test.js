const request = require("supertest")
const { app } = require("..")

test("Backend is running", async () => {
  const response = await request(app)
    .post("/login")
    .send({ username: "saif", password: "password" })
  expect(response.status).toBe(200)
})
