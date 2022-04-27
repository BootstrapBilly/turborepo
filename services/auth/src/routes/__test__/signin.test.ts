import request from "supertest";
import app from "../../app";
import { User } from "../../models";

it("returns correct response on successful signin", async () => {
  const user = User.addNew({
    email: "testemail@test.com",
    password: "testpassword",
  });

  await user.save();

  const res = await request(app)
    .post("/api/users/signin")
    .send({
      email: "testemail@test.com",
      password: "testpassword",
    })
    .expect(200);

  expect(res.get("Set-Cookie")).toBeDefined();
});

it("returns correct response if the user was not found", async () => {
  const res = await request(app)
    .post("/api/users/signin")
    .send({
      email: "testemail@test.com",
      password: "testpassword",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Invalid email or password");
});

it("returns correct response with an invalid email", async () => {
  const res = await request(app)
    .post("/api/users/signin")
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
    .post("/api/users/signin")
    .send({
      email: "testemail@test.com",
      password: "p",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Invalid email or password");
});

it("returns correct response with no email", async () => {
  const res = await request(app)
    .post("/api/users/signin")
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
    .post("/api/users/signin")
    .send({
      email: "testemail@test.com",
      password: "",
    })
    .expect(400);

  const errors = res.body.errors[0];

  expect(errors.message).toBe("Enter a password");
  expect(errors.field).toBe("password");
});
