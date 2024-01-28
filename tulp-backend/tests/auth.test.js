const request = require("supertest")
const { app } = require("..")
const User = require("../models/user.model")

describe("TULP Features test", () => {
  it("Backend is running", async () => {
    const response = await request(app).get("/health")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(true)
  })

  it("testing successful login", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("user")
    expect(response.body).toHaveProperty("token")
  })

  it("testing wrong login credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "passwd" })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("message")
  })

  it("testing get a class with correct slug", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .get("/class/sef-ui-ux-design-bootcamp")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("class")
  })

  it("testing get a class with incorrect slug", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .get("/class/seotcamp")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty("error")
  })

  it("testing get a class with unauthorized user", async () => {
    const response = await request(app).get("/class/sef-ui-ux-design-bootcamp")

    expect(response.status).toBe(403)
  })

  it("testing get classs the user is in", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .get("/class/get-user/saif")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("student")
  })

  it("testing successful get class schedule with correct slug", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .get("/class/schedule/sef-ui-ux-design-bootcamp")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("schedule")
  })

  it("testing get class schedule with incorrect slug ", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .get("/class/schedule/sef-ui-ux-design-bootcamp")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("schedule")
  })

  it("testing get class schedule with incorrect slug ", async () => {
    const authResponse = await request(app)
      .post("/auth/login")
      .send({ username: "saif", password: "password" })

    const token = authResponse.body.token

    const response = await request(app)
      .post("/class/sef-ui-ux-design-bootcamp/assignment")
      .send({ title: "tester", content: "test" })
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
  })
})
