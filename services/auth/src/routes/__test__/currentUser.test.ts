import request from "supertest";
import app from "../../app";

it("returns the current user when they are signed in", async () => {
  //
  const cookie = await signup();

  const res = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  const user = res.body.currentUser;

  expect(user.email).toBe("testemail@test.com");
});

it("returns null when no user is signed in", async () => {
  const res = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  const user = res.body.currentUser;

  expect(user).toBe(null);
});
