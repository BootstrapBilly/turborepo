import request from "supertest";
import app from "../../app";

it("returns correct response on successful signup", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "testemail@test.com",
      password: "testpassword",
    })
    .expect(201);

  expect(res.get("Set-Cookie")).toBeDefined();
});

it("returns correct response with an invalid email", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "invalid",
      password: "testpassword",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Enter a valid email");
  expect(errors.field).toBe("email");
});

it("returns correct response with an invalid password", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "testemail@test.com",
      password: "p",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Password must be between 8 and 20 characters");
  expect(errors.field).toBe("password");
});

it("returns correct response with no email", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "",
      password: "testpassword",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Enter a valid email");
  expect(errors.field).toBe("email");
});

it("returns correct response with no password", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "testemail@test.com",
      password: "",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Password must be between 8 and 20 characters");
  expect(errors.field).toBe("password");
});

it("returns correct response with email which is in use", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "testemail@test.com",
      password: "testpassword",
    })
    .expect(201);

  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "testemail@test.com",
      password: "testpassword",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Email in use");
});
